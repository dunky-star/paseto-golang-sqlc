package db

import (
	"database/sql"
)

// Store interface provides all functions to handle DB queries and transactions
type Store interface {
	Querier
}

// SQLStore provides all functions to handle SQL queries and transactions
type SQLStore struct {
	*Queries
	db *sql.DB
}

// NewStore creates a new store
func NewStore(db *sql.DB) Store {
	return &SQLStore{
		db:      db,
		Queries: New(db),
	}
}
