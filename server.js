import mysql from 'mysql';
import express from 'express';
import { config } from './db/connect';

// 连接数据库
const connection = mysql.createConnection(config);
connection.connect();

const app = express();

app.get('/posts', (req, res) => {
  const sql = 'SELECT * FROM article';
  connection.query(sql, function(err, result) {
    res.json(result);
  });
});

app.listen(3000);
