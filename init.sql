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
	created_at timestamp default now(),
)
;

alter table fund_financial owner to u1
;
