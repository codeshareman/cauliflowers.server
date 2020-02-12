import mysql from "mysql";
import express from "express";
import cors from "cors";
import { config } from "./db/connect";
// 连接数据库
var connection = mysql.createConnection(config);
connection.connect();
var app = express();
app.use(cors());
app.get("/portal/recommend/article", function (req, res) {
    var sql = "SELECT * FROM article";
    connection.query(sql, function (err, data) {
        var result = {
            code: 0,
            msg: "获取成功",
            data: data
        };
        res.json(result);
    });
});
app.listen(3000);
