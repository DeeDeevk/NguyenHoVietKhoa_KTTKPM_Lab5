const express = require('express');
const mysql = require('mysql2');
const app = express();

// Cấu hình kết nối MySQL sử dụng tên service 'db' trong Docker
const connection = mysql.createConnection({
  host: 'db',
  user: 'user',
  password: 'password',
  database: 'mydb'
});

app.get('/', (req, res) => {
  connection.query('SELECT "Kết nối MySQL thành công!" AS msg', (err, results) => {
    if (err) {
      res.status(500).send("Lỗi kết nối database: " + err.message);
    } else {
      res.send(`<h1>${results[0].msg}</h1>`);
    }
  });
});

app.listen(3000, () => console.log('App running on port 3000'));