# EQT Fullstack code test

Hello! :wave:

- Update the schema to match our new requirements where user could be able to have more than one fund.
- to reflect changes after `docker-compose up` do the following steps:
- run `cd ./backend`
- run `npm run migrate:up`

---

# Implemtation docs

- Added `dotenv` and `dotenv-expand` to set local environments variables instead of secrets .js and it should be added to `.gitignore` file.
- Added `pg-migrate` to enable migrations in db so developer can change schema programatically.
- Added migrations files.
  - firstly, for creating the new relation between user and funds where user can have more than one fund (one to many) refrence user_email in funds table as forgien key.
  - Secondly, Seed the data by getting all user emails and set in funds table.
  - Finally, removed the constraint and old column from db.
