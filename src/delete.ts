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
    console.time('删除user');
    connection.query('DELETE FROM `user` WHERE id = ?', [1], (e, results) => {
        if (e) {
            console.error('删除user失败', e);
            return;
        }
        console.timeEnd('删除user');
        console.log(JSON.stringify(results));
        connection.end();
    });
});