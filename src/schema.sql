-- schema.sql


-- create the jeopardy database
-- schema.sql

-- Create the 'categories' table
CREATE TABLE IF NOT EXISTS categories (
    category_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

-- Create the 'qa' table
CREATE TABLE IF NOT EXISTS qa (
    question_id INTEGER PRIMARY KEY,
    category_id INTEGER,
    level INTEGER,
    prompt TEXT NOT NULL,
    answer TEXT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Sample data for demonstration
INSERT INTO categories (name) VALUES ('Computer history');
INSERT INTO categories (name) VALUES ('Git');

INSERT INTO qa (category_id, level, prompt, answer) 
VALUES (1, 200, 'Q1', 'A1'),
(1, 200, 'Q2', 'A2'), 
(1, 200, 'Q2', 'A2'),
(1, 200, 'Q2', 'A2'),
(1, 200, 'Q2', 'A2');

