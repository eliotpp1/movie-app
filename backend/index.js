const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let db;

function connectWithRetry() {
  console.log("⏳ Connexion à MySQL...");

  db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
  });

  db.getConnection((err, connection) => {
    if (err) {
      console.log("❌ MySQL pas prêt, retry dans 2s...");
      setTimeout(connectWithRetry, 2000);
    } else {
      console.log("✅ Connecté à MySQL !");
      connection.release();
    }
  });
}

connectWithRetry();

app.get("/films", (req, res) => {
  db.query("SELECT * FROM films", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.post("/films", (req, res) => {
  const { title, rating, review, summary, poster_url } = req.body;

  db.query(
    "INSERT INTO films (title, rating, review, summary, poster_url) VALUES (?, ?, ?, ?, ?)",
    [title, rating, review, summary, poster_url],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(201);
    },
  );
});

app.delete("/films/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM films WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

app.put("/films/:id", (req, res) => {
  const { id } = req.params;
  const { title, rating, review, summary, poster_url } = req.body;

  db.query(
    "UPDATE films SET title=?, rating=?, review=?, summary=?, poster_url=? WHERE id=?",
    [title, rating, review, summary, poster_url, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.sendStatus(200);
    },
  );
});

app.listen(3001, () => console.log("🚀 Backend running"));
