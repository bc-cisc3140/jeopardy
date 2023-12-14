CREATE TABLE JeopardyQuestions (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  Category TEXT,
  Question TEXT,
  OptionA TEXT,
  OptionB TEXT,
  OptionC TEXT,
  OptionD TEXT,
  CorrectAnswer TEXT,
  Points INTEGER
);

INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Pattern Matching", "Which symbol is used in regular expressions to match the beginning of a line?", "*", "^", "$", "%", "^", 100);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Pattern Matching", "In regular expressions, what does the symbol '*' represent?", "A) Matches the end", "B) Matches zero or more occurrences of the preceding character", "C) Matches one or more occurrences of the preceding character", "D) Matches any single character", "B) Matches zero or more occurrences of the preceding character", 200);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Pattern Matching", "Which command is used in Unix to perform pattern matching in file content?", "A) grep", "B) awk", "C) sed", "D) find", "A) grep", 300);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Pattern Matching", "What regular expression character is used to match any single character?", "?", "*", ".", "+", "C) .", 400);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Pattern Matching", "In regex, what does the character class [0-9] represent?", "A) Matches any digit from 0 to 9", "B) Matches any letter from a to z", "C) Matches any special character", "D) Matches any whitespace character", "A) Matches any digit from 0 to 9", 500);

INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Unix", "What command is used to display the current directory in Unix?", "A) ls", "B) pwd", "C) cd", "D) dir", "B) pwd", 100);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Unix", "Which command is used to create a new directory in Unix?", "A) mkdir", "B) touch", "C) cp", "D) rm", "A) mkdir", 200);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Unix", "Which command is used to list the contents of a directory in long format?", "A) ls -l", "B) dir -l", "C) ls -lt", "D) ls -a", "A) ls -l", 300);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Unix", "What command is used to create a symbolic link in Unix/Linux?", "A) link", "B) shortcut", "C) ln -s", "D) symlink", "C) ln -s", 400);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Unix", "What command is used to find and replace text in files?", "A) grep", "B) sed", "C) awk", "D) replace", "B) sed", 500);

INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("History of Computing", "Which device is considered the first electronic general-purpose computer?", "A) ENIAC", "B) UNIVAC I", "C) Colossus", "D) Analytical Engine", "A) ENIAC", 100);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("History of Computing", "Who is often credited as the father of computer science and artificial intelligence?", "A) Alan Turing", "B) Charles Babbage", "C) Ada Lovelace", "D) John von Neumann", "A) Alan Turing", 200);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("History of Computing", "What year was the first computer virus discovered?", "A) 1986", "B) 1995", "C) 1971", "D) 2001", "C) 1971", 300);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("History of Computing", "Which programming language was developed by Dennis Ritchie in the early 1970s?", "A) Pascal", "B) Fortran", "C) COBOL", "D) C", "D) C", 400);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("History of Computing", "Who co-founded Apple Inc. alongside Steve Jobs?", "A) Bill Gates", "B) Steve Wozniak", "C) Larry Page", "D) Sergey Brin", "B) Steve Wozniak", 500);

INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("GNU Make", "What does the GNU Make utility primarily manage?", "A) File permissions", "B) Software compilation", "C) Network configurations", "D) System security", "B) Software compilation", 100);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("GNU Make", "Which file is used as a configuration file for GNU Make?", "A) Makefile", "B) Config.make", "C) Compile.conf", "D) Build.txt", "A) Makefile", 200);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("GNU Make", "What is the purpose of 'make clean' in GNU Make?", "A) To delete the Makefile", "B) To clean the source code files", "C) To recompile the code", "D) To display help documentation", "B) To clean the source code files", 300);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("GNU Make", "What does := mean in makefile?", "A) simply expanded variables", "B) define", "C) equal", "D) export", "A) simply expanded variables", 400);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("GNU Make", "What does the '$@' symbol represent in a Makefile rule?", "A) Current directory", "B) First prerequisite", "C) Target of the rule", "D) All prerequisites", "C) Target of the rule", 500);

INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Terminal", "Which command is used to list the contents of a directory in long format?", "A) ls -l", "B) dir -l", "C) ls -lt", "D) ls -a", "A) ls -l", 100);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Terminal", "What command is used to navigate to the home directory in a Unix terminal?", "A) home", "B) cd ~", "C) move ~/", "D) cd /", "B) cd ~", 200);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Terminal", "Which command is used to change the current directory?", "A) cd", "B) change", "C) mv", "D) switch", "A) cd", 300);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Terminal", "What command is used to display the manual page of a specific command?", "A) help", "B) man", "C) info", "D) doc", "B) man", 400);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("Terminal", "Which command is used to compress files in Unix/Linux?", "A) zip", "B) compress", "C) tar", "D) gzip", "D) gzip", 500);

INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("SQL", "Which SQL statement is used to retrieve data from a database?", "A) SELECT", "B) RETRIEVE", "C) FROM", "D) GETDATA", "A) SELECT", 100);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("SQL", "What does the acronym 'SQL' stand for?", "A) Structured Query Language", "B) System Query Logic", "C) Sequential Query Line", "D) Software Query Loop", "A) Structured Query Language", 200);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("SQL", "Which clause is used to filter records in a SQL query?", "A) WHERE", "B) HAVING", "C) FROM", "D) FILTER", "A) WHERE", 300);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("SQL", "What SQL function is used to count the number of rows in a table?", "A) COUNT()", "B) SUM()", "C) AVG()", "D) MAX()", "A) COUNT()", 400);
INSERT INTO JeopardyQuestions (Category, Question, OptionA, OptionB, OptionC, OptionD, CorrectAnswer, Points) VALUES ("SQL", "Which SQL command is used to add a new record to a table?", "A) INSERT INTO", "B) ADD RECORD", "C) MODIFY", "D) CREATE", "A) INSERT INTO", 500);