-- creating the table to start

-- should only be used when creating the table for the first time.
-- if edits were made the table should be deleted and re-added to the database or the changes can be made manually.

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