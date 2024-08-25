package api

import (
	db "github.com/dunky-star/pasetoauth/db/sqlc"
	"github.com/gin-gonic/gin"
)

// Server serves HTTP requests for our API service.
type Server struct {
	store  db.Store
	router *gin.Engine
}

// NewServer creates a new HTTP server and setup routing.
func NewServer(store db.Store) (*Server, error) {

	server := &Server{
		store: store,
	}
	router := gin.Default()

	router.POST("/user", server.createUser)

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
