package main

import (
	"database/sql"
	"log"

	"github.com/dunky-star/pasetoauth/api"
	db "github.com/dunky-star/pasetoauth/db/sqlc"
	"github.com/dunky-star/pasetoauth/util"
)

func main() {
	config, err := util.LoadConfig(".")
	if err != nil {
		log.Fatal("Cannot load configuration. ", err)
	}
	conn, err := sql.Open(config.DBDriver, config.DBSource)
	if err != nil {
		log.Fatal("Cannot connect to DB: ", err)
	}

	store := db.NewStore(conn)
	server, err := api.NewServer(config, store)
	if err != nil {
		log.Fatal("cannot create server. ", err)
	}

	err = server.Start(config.ServerAddress)
	if err != nil {
		log.Fatal("Cannot start server ", err)
	}
}
