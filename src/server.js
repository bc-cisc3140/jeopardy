var express = require("express")
var app = express()
const path = require('path');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db');

// Server port
var HTTP_PORT = 8000 

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/api/fruits", (req, res, next) => {
  var sql = "select * from fruits"
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }
    res.json({
      "message":"success",
      "data":rows
    })
  });
});

app.get("/api/fruit/:id", (req, res, next) => {
    var sql = "select * from fruits where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

// custom query for the prompt and answer
app.get('/query', (req, res) => {
  const { query } = req.query;

  if (!query) {
    res.status(400).json({error: 'Query param required.'});
    return;
  }

  console.log(query);

  db.all(query, [], (err, elem) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": elem
    });
  });
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
