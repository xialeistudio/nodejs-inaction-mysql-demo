"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var config_1 = require("./config");
console.time('连接数据库');
var connection = mysql.createConnection(config_1.default);
connection.connect(function (e) {
    if (e) {
        console.error('连接数据库失败', e);
        return;
    }
    console.timeEnd('连接数据库');
    // 添加数据
    console.time('删除user');
    connection.query('DELETE FROM `user` WHERE id = ?', [1], function (e, results) {
        if (e) {
            console.error('删除user失败', e);
            return;
        }
        console.timeEnd('删除user');
        console.log(JSON.stringify(results));
        connection.end();
    });
});
//# sourceMappingURL=delete.js.map