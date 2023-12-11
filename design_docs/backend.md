# Backend notes

To avoid installing anything extra, we will use SQLite3 to store data. SQLite offers a small, self-contained database engine that doesn't require a separate server process nor any installation.

## Table Schema

| Field  | Description      | Type    | Example value                                                                     |
| ------ | ---------------- | ------- | --------------------------------------------------------------------------------- |
| qid    | Question ID      | Integer | 1,2,3, etc                                                                        |
| topic  | Topic            | Text    | Software Types                                                                    |
| level  | Difficulty Level | Integer | 100, 200, 300, 400, 500                                                           |
| prompt | Prompt           | Text    | This kind of software is made for end users, typically for business applications. |
| answer | Answer           | Text    | What are software applications?                                                   |


## Table Inforamtion

There are 5 topics: history of computing, terminal, version control, regular expression, sql respectivly. Each topic had 5 questions 1 for each difficulty for a total of 25 questions. To access a question one should use the qid and to detemine the value of the question the computation qid % 5 * 100 can be used and when qid % 5 = 0 then the value is 500.