create table "user"
(
	id serial not null
		constraint user_pkey
			primary key,
	email varchar(300),
	first_name varchar(300),
	last_name varchar(300)
)
;

alter table "user" owner to u1
;

create unique index user_email_uindex
	on "user" (email)
;

