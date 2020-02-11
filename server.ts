import mysql from 'mysql';
import express from 'express';
import cors from 'cors';
import { config } from './db/connect';
import { Result, Reply } from './types/shared';
import { Article } from './types/arcticle';

// 连接数据库
const connection = mysql.createConnection(config);
connection.connect();

const app = express();

app.use(cors());

app.get('/portal/recommend/article', (req, res) => {
  const sql: string = 'SELECT * FROM article';
  connection.query(sql, function(err, data: Article) {
    const result: Reply<Article> = {
      code: 0,
      msg: '获取成功',
      data,
    };
    res.json(result);
  });
});

app.listen(3000);
