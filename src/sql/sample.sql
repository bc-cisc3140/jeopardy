-- Sample sql file for creating tables and inserting records

CREATE TABLE fruits (
  id INTEGER,
  name TEXT,
  color TEXT
);

CREATE TABLE vegetables (
  id INTEGER,
  name TEXT,
  color TEXT
);

INSERT INTO fruits VALUES (1, 'banana', 'yellow');
INSERT INTO fruits (id, name, color) VALUES (2, 'pomogranate', 'red');
INSERT INTO fruits (id, name, color) VALUES (3, 'blueberries', 'blue');

INSERT INTO vegetables (id, name, color) VALUES (1, 'carrot', 'orange');
INSERT INTO vegetables (id, name, color) VALUES (2, 'spinach', 'green');
INSERT INTO vegetables (id, name, color) VALUES (3, 'cauliflower', 'white');
