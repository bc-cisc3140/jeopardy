-- creating the table to start

CREATE TABLE jeopardy (
	qid INTEGER,
	topic TEXT,
	level INTEGER,
	prompt TEXT,
	answer TEXT
);


-- import the data from a spread sheet instead of hard coding everything
.mode csv
.import 'sql/jeopardy.csv' jeopardy