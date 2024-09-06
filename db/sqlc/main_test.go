package db

import (
	"database/sql"
	"log"
	"os"
	"testing"

	"github.com/dunky-star/pasetoauth/util"
	_ "github.com/lib/pq"
)

var testQueries *Queries // Deifining it as a global variable since we shall use it extensively in all unit tests
var testDB *sql.DB

func TestMain(m *testing.M) {

	config, err := util.LoadConfig("../")
	if err != nil {
		log.Fatal("Cannot load configuration. ", err)
	}
	testDB, err = sql.Open(config.DBDriver, config.DBSource)
	if err != nil {
		log.Fatal("cannot connect to db:", err)
	}

	testQueries = New(testDB)

	os.Exit(m.Run())
}
