var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'dev',
  password: "developer",
  database: 'blog'
})

connection.connect()


connection.query("CREATE TABLE posts(title TEXT, body TEXT, id INT AUTO_INCREMENT PRIMARY KEY, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)", (err, rows) => {
  console.log(err, rows);
});


connection.end()