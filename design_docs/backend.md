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



## Database setup: 
`sample.sql` is used for creating the tables in the database, and `jeopardy.db` is the SQLite database file where the schema and data are stored.

## JavaScript 
`server.js` sets up an Express.js server that serves static files from the 'ui' directory, connects to a SQLite database 'jeopardy.db', and defines two routes: one for fetching a specific question(`questions.js`) from the database and another for serving the homepage. The server listens on port 8000 and logs a message when it successfully starts.

