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


