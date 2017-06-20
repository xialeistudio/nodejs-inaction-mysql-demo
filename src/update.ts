import * as mysql from 'mysql';
import config from './config';

console.time('连接数据库');
const connection = mysql.createConnection(config);

connection.connect((e) => {
    if (e) {
        console.error('连接数据库失败', e);
        return;
    }
    console.timeEnd('连接数据库');
    // 添加数据
    console.time('更新user');
    connection.query('UPDATE `user` SET name = ? WHERE id = ?', ['test-01', 1], (e, results) => {
        if (e) {
            console.error('更新user失败', e);
            return;
        }
        console.timeEnd('更新user');
        console.log(JSON.stringify(results));
        connection.end();
    });
});