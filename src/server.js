var express = require("express")
var app = express()
const path = require('path');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db');

// Server port
var HTTP_PORT = 8001 

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get('/get-question/:category/:points', (req, res) => {
  const { category, points } = req.params;

  const conn = new sqlite3.Database('database.db');

  // Fetch a question from the database based on the category and points
  const query = 'SELECT * FROM JeopardyQuestions WHERE Category = ? AND Points = ?';
  conn.get(query, [category, points], (err, row) => {
      if (err) {
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          if (row) {
              // Get column names from row object
              const columns = Object.keys(row);

              // Create a dictionary using column names as keys
              const rowDict = {};
              columns.forEach((col) => {
                  rowDict[col] = row[col];
              });

              // Return the row dictionary as JSON response
              res.status(200).json(rowDict);
          } else {
              res.status(404).send('Question not found');
          }
      }
  });

  // Close the database connection
  conn.close();
});

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

//frontend
app.get("/app", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'ui', 'gameboard.html'))
});

app.get("/css/:file", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'ui', 'css', req.params.file))
});

app.get("/js/:file", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'ui', 'js', req.params.file))
});

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
