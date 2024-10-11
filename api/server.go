package api

import (
	"fmt"
	"net/http"

	db "github.com/dunky-star/pasetoauth/db/sqlc"
	"github.com/dunky-star/pasetoauth/token"
	"github.com/dunky-star/pasetoauth/util"
	"github.com/gin-gonic/gin"
)

// Server serves HTTP requests for our API service.
type Server struct {
	config     util.Config
	store      db.Store
	tokenMaker token.Maker
	router     *gin.Engine
}

// NewServer creates a new HTTP server and setup routing.
func NewServer(config util.Config, store db.Store) (*Server, error) {
	tokenMaker, err := token.NewPasetoMaker(config.TokenSymmetricKey)
	if err != nil {
		return nil, fmt.Errorf("Cannot create token maker: %w", err)
	}
	server := &Server{
		config:     config,
		store:      store,
		tokenMaker: tokenMaker,
	}
	router := gin.Default()

	// Add CORS middleware
	router.Use(CORSMiddleware())

	router.POST("/users", server.createUser)
	router.POST("/users/login", server.loginUser)

	server.router = router
	return server, nil
}

// Start runs the Http server on a specific address
func (server *Server) Start(address string) error {
	return server.router.Run(address)
}

func errorResponse(err error) gin.H {
	return gin.H{"error": err.Error()}
}

// CORSMiddleware handles cross-origin requests and allows specific origins
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Specify the allowed origin
		allowedOrigin := "http://localhost:5173"
		origin := c.Request.Header.Get("Origin")

		// Check if the request origin matches the allowed origin
		if origin == allowedOrigin {
			c.Writer.Header().Set("Access-Control-Allow-Origin", allowedOrigin)
			c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
			c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, X-Requested-With")
			c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")
		}

		// Handle preflight request (OPTIONS)
		if c.Request.Method == "OPTIONS" && origin == allowedOrigin {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		// Proceed with the request
		c.Next()
	}
}
