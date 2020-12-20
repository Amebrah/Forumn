
const express = require('express')
var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const mysql = require('mysql')
var cors = require('cors')
app.use(cors())
var connection = mysql.createConnection({
        user: 'root',
        password: 'password',
        host: 'localhost',
        port: 3306,
        database: 'forumn'
});

app.post('/createAccount', (req, res) => {
    const queryString = "INSERT INTO userinfo (username, pass) VALUES  (?, ?)"
    console.log(req.body) 
    //WHERE NOT EXISTS ( SELECT username FROM userinfo WHERE username = ?)
    connection.query(queryString, [req.body.username, req.body.password], function (err, result, fields) {
        if (err) throw err;
        if (result.length != 1) return res.send('Failed to Add'); 
        
      });
    return res.send('User added');
});

app.get('/login', (req, res) => {
    const queryString = "SELECT * FROM userinfo WHERE username = ?, pass = ?"
    console.log(req.body) 
    //WHERE NOT EXISTS ( SELECT username FROM userinfo WHERE username = ?)
    connection.query(queryString, [req.body.username, req.body.password], function (err, result, fields) {
        if (err) throw err;
        if (result.length != 1) return res.send('Incorrect Login'); 
      });
    return res.send('Logged In');
});

app.listen(8080, () => {
    console.log("Server is up and running on 8080")
})
 
