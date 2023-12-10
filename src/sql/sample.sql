DROP TABLE IF EXISTS jeopardy;

CREATE TABLE jeopardy (
    qid INTEGER PRIMARY KEY AUTOINCREMENT,
    topic TEXT,
    level INTEGER,
    prompt TEXT,
    answer TEXT
);
/*Sample questions for testing, will add more overtime*/
INSERT INTO jeopardy (topic, level, prompt, answer) VALUES
('History of Computing', 100, 'This ancient computing device, consisting of beads on rods, was used for arithmetic calculations and is still in use in some parts of the world today.', 'What is an abacus?'),
('History of Computing', 200, 'Method was used to feed instructions into early computing machines', 'What are punch cards?'),
('History of Computing', 300, 'Who is considered to be the father of computers?', 'Who is Charles Babbage?'),
('History of Computing', 400, 'What was the name of the German cypher machine used in World War II?', 'What is the Engima?'),
('History of Computing', 500, 'Considered the first woman programmer?', 'Who is Ada Lovelace?'),
('Terminal Environment', 100, 'What year was UNIX developed?', 'What is 1969?'),
('Terminal Environment', 200, 'What structure is your file directory?', 'What is a tree?');

SELECT * FROM jeopardy;
