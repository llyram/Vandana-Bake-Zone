const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require("./db")

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend")));

app.get("/getmenu", async (req, res) => {
  try {
    const menu = await pool.query(
      "SELECT * FROM menu"
    );
    console.log(menu.rows);
    res.json(menu.rows);
    // res.json(mock_return);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`server has started at port ${PORT}`);
});
