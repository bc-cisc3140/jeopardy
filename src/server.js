const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path'); // Make sure to require the path module

const app = express();
app.use(cors());
app.use(express.static('ui')); // Serves files from 'ui' as static files

const db = new sqlite3.Database('jeopardy.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the jeopardy database.');
});

// Route for fetching a specific question
app.get('/get-question', (req, res) => {
  const qid = req.query.id;
  db.get('SELECT prompt FROM jeopardy WHERE qid = ?', [qid], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(row);
  });
});

app.get('/categories', (req, res) => {
  db.all('SELECT DISTINCT topic FROM jeopardy', [], (err, topics) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    const categories = topics.map(topic => topic.topic); // Extracting the topic names into a simple array
    res.json(categories);
  });
});

app.get("/get-answer", (req, res) => {
  const qid = req.query.id;
  db.get("SELECT answer FROM jeopardy WHERE qid = ?", [qid], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(row);
  });
});

// Route for serving the homepage
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gameboard.html'));
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
