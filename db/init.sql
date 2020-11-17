DO $$ BEGIN
  create type financial_type as enum ('CREDIT', 'DEBIT');
  EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

create table fund
(
	id serial not null
		constraint fund_pkey
			primary key,
	name varchar(500),
	description text
)
;

alter table fund owner to u1
;

create table "user"
(
	email varchar(300) not null
		constraint user_pk
			primary key,
	first_name varchar(300),
	last_name varchar(300),
	fund_fk integer
		constraint user_fund_id_fk
			references fund
)
;

alter table "user" owner to u1
;

create unique index user_email_uindex
	on "user" (email)
;

create table fund_financial
(
	id serial not null,
	amount bigint not null,
	currency varchar(50),
	fund_fk integer
		constraint fund_financial_fund_id_fk
			references fund,
	type financial_type not null,
	created_at timestamp default now()
)
;

alter table fund_financial owner to u1
;

-- Seeds

INSERT INTO fund (id, name, description) VALUES (1, 'EQT X', 'Encompasses investments mainly within the public value segment');
INSERT INTO fund (id, name, description) VALUES (2, 'EQT Y', 'Encompasses investments mainly within the real estate segment');

INSERT INTO "user" (email, first_name, last_name, fund_fk) VALUES ('jane@doe.eqt.com', 'Jane', 'Doe', 1);
INSERT INTO "user" (email, first_name, last_name, fund_fk) VALUES ('john@doe.eqt.com', 'John', 'Doe', 2);

INSERT INTO fund_financial (amount, fund_fk, type, created_at, currency) VALUES (35000000, 1, 'DEBIT', '2020-11-15 12:29:58.886418', 'SEK');
INSERT INTO fund_financial (amount, fund_fk, type, created_at, currency) VALUES (20000000, 1, 'CREDIT', '2020-11-12 12:29:58.886418', 'SEK');
INSERT INTO fund_financial (amount, fund_fk, type, created_at, currency) VALUES (400000000, 1, 'CREDIT', '2020-11-17 12:29:58.886418', 'SEK');
INSERT INTO fund_financial (amount, fund_fk, type, created_at, currency) VALUES (25005000, 1, 'DEBIT', '2020-11-19 12:29:58.886418', 'SEK');
INSERT INTO fund_financial (amount, fund_fk, type, created_at, currency) VALUES (3000000, 1, 'DEBIT', '2020-11-15 12:29:58.886418', 'SEK');
INSERT INTO fund_financial (amount, fund_fk, type, created_at, currency) VALUES (70000000, 2, 'CREDIT', '2020-11-11 12:29:58.886418', 'SEK');
INSERT INTO fund_financial (amount, fund_fk, type, created_at, currency) VALUES (450000000, 2, 'CREDIT', '2020-11-15 12:29:58.886418', 'SEK');
INSERT INTO fund_financial (amount, fund_fk, type, created_at, currency) VALUES (35000000, 2, 'DEBIT', '2020-11-20 12:29:58.886418', 'SEK');