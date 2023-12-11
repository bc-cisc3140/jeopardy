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
     ('Terminal',100,'This term describes the primary interface in a Unix or Linux environment where you can type commands.','What is the Terminal or Command Line Interface (CLI)?'),
     ('Terminal',200,'What is bash short for?','What is ''Bourne Again Shell''?'),
     ('Terminal',300,'This network protocol allows a user to access another computer over a network, doing so securely by encrypting the session.','What is SSH(Secure Shell)?'),
     ('Terminal',400,'This Unix command, often used in shell scripting, searches the contents of files for lines containing a match to a given string or pattern.','What is grep?'),
     ('Terminal',500,'This line at the start of a Bash script specifies the interpreter path and is crucial for script execution.','What is the shebang ''#!''?'),
     ('Database',100,'What is SQL short for?','What is Structured Query Language?'),
     ('Database',200,'In SQL, this command is used to add new data into a database table.','What is INSERT INTO?'),
     ('Database',300,'This SQLite function can be used to concatenate strings together in a query.','What is ''||''?'),
     ('Database',400,'This keyword in SQL is added to a SELECT statement to return only unique values.','What is DISTINCT?'),
     ('Database',500,'In SQLite, this database object can be created to improve the performance of data retrieval.','What is an index?'),
     ('Version Control Systems', 100, 'In Git, this command creates a new branch without switching to it.', 'What is ''git branch <branchname>''?'),
     ('Version Control Systems', 200, 'This Git command updates your local repository to the newest commit, fetching and merging remote changes.', 'What is ''git pull''?'),
     ('Version Control Systems', 300, 'In SVN, this command shows the differences between two revisions or paths.', 'What is ''svn diff''?'),
     ('Version Control Systems', 400, 'This two-word Git command shows metadata and content changes of the specified commit.', 'What is ''git show <commit>''?'),
     ('Version Control Systems', 500, 'This SVN URL schema allows access through an SSH tunnel, ensuring secure data transfer.', 'What is ''svn+ssh:///''?'),
     ('Web Development',100,'This language forms the structure of web pages and is the cornerstone of web content.','What is HTML?'),
     ('Web Development',200,'This HTTP status code, commonly used in RESTful APIs, indicates that the requested resource could not be found on the server.','What is ''404'' (not found)?'),
     ('Web Development',300,'This protocol is the foundation of any data exchange on the Web and stands for Hypertext Transfer Protocol.','What is HTTP?'),
     ('Web Development',400,'The release date(month&year) of the first version of SSH.','What is july 1995?'),
     ('Web Development',500,'This common security vulnerability occurs when a web application directly includes user input within HTML output.','What is Cross-site Scripting (XSS)?');


SELECT * FROM jeopardy;
