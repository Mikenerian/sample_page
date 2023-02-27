const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'skf9H9_49',
  database: 'test_mysql'
});

connection.connect((err) => {
  if (err) {
    console.log('error connectiong: ' + err.stack);
    return;
  }
  console.log('success');
});

app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.render('simple_page.html');
    }
  );
});

app.listen(3000);