drop table if exists project;
create table project (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	link TEXT,
	thumbnail TEXT
);

drop table if exists project_tech;
create table project_tech
(
	project_id INTEGER,
	tech_id INTEGER
);

drop table if exists tech;
create table tech (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT
);

drop table if exists detail;
create table detail
(
	project_id INTEGER,
	value TEXT
);
