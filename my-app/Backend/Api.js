
const express = require('express')
var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const mysql = require('mysql')
var cors = require('cors')
const e = require('cors')
app.use(cors())

//Connect sql
var connection = mysql.createConnection({
        user: 'root',
        password: 'password',
        host: 'localhost',
        port: 3306,
        database: 'forumn'
});

//Check if username exists

//Create Account
app.post('/createAccount', (req, res) => {
    const queryString = "INSERT INTO userinfo (username, pass) SELECT * FROM (SELECT ?,?) AS tmp WHERE NOT EXISTS ( SELECT username FROM userinfo WHERE username = ?) LIMIT 1"
    connection.query(queryString, [req.body.username, req.body.password, req.body.username], function (err, result, fields) {
        if (err) {
          throw err;
        }
        if (result.affectedRows != 1)  {
          return res.send('Failed to Add'); 
        }
        else {
          return res.send('User added');

        }
      });
});

//Login
app.get('/login', (req, res) => {
    const queryString = "SELECT * FROM userinfo WHERE username = ? AND pass = ?"
    connection.query(queryString, [req.body.username, req.body.password], function (err, result, fields) {

        if (err) {
          throw err;
        } 
        if (result.length != 1) {
          return res.send('Incorrect Login'); 
        } 
        else {
          return res.send('Logged In');
        }
      });

});

//Listen on port 8080
app.listen(8080, () => {
    console.log("Server is up and running on 8080")
})
 
