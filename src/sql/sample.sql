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
('Software Types', 100, 'This kind of software is made for end users, typically for business applications.', 'What are software applications?'),
('Historical Events', 200, 'This event occurred on July 20, 1969.', 'What is the moon landing?'),
('Historical Events', 300, 'This event occurred on July 20, 1969.', 'What is the moon landing?');

SELECT * FROM jeopardy;
