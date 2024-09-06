DB_URL=postgresql://postgres:cluster@1@localhost:5432/paseto_auth?sslmode=disable
createdb:
	docker exec -it postgres_container createdb --username=postgres paseto_auth
dropdb:
	docker exec -it postgres_container dropdb --username=postgres paseto_auth
migrateup:
	migrate -path db/migration -database "$(DB_URL)" -verbose up
migratedown:
	migrate -path db/migration -database "$(DB_URL)" -verbose down
new_migration:
	migrate create -ext sql -dir db/migration -seq $(name)
sqlc:
	sqlc generate
server:
	go run main.go

.PHONY: createdb dropdb migrateup migratedown new_migration sqlc server
