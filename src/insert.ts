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
    console.time('插入user');
    connection.query('INSERT INTO `user` SET ?', {name: Date.now()}, (e, results) => {
        if (e) {
            console.error('插入user失败', e);
            return;
        }
        console.timeEnd('插入user');
        console.log(JSON.stringify(results));
        connection.end();
    });
});