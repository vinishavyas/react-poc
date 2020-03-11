const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const session = require('express-session');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'user_id',
  secret: 'somerandonstuffs',
  resave: true,
  saveUninitialized: true,
  cookie: {
      expires: 600000
  }
}));

//create mysql connection
const connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "react"
});

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

app.get('/', function(req, res){
	res.send("Server testing with express.");
});

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
  console.log("Got a GET request for /list_user");
  res.send('Page Listing');
})

app.post('/register' ,[
  check('name')
  .exists().withMessage('Please enter name')
  .isLength({ min: 3, max: 50  }).withMessage('Please enter name between 3 to 50 characters.'),
  check('email')
  .exists().withMessage('Please enter email address.')
  .isEmail().withMessage('Please enter correct email address.')
  .custom(email => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM users where email = ?", [email], function(err, results, fields) {
      if (err)
        reject(err)
      if(results != undefined ) {
        if (results.length>0)
        reject(new Error('Email Already exists'))
      }
      resolve()
    });
  })
  }),
  check('password')
  .exists().withMessage('Please enter password')
  .isLength({min:8}).withMessage('Please enter password of atleast 8 characters.')
], function (req, res) {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.json({ status:"error",errors: errors.array() })
  } else {
    // Prepare output in JSON format
    var data = [[req.body.name, req.body.email,bcrypt.hashSync(req.body.password, 10),req.body.country,req.body.phone,req.body.accept_tc]];

    //insert data into database
    connection.query("INSERT INTO users(`name`, `email`, `password`, `country`, `phone`, `accept_tc`) VALUES  ?", [data],  function(err, results, fields){
      if (err) {
        return res.json({ status:"error" })
      }
      // get inserted rows
      return res.json({ status:"success" })
    })
  }
})

app.post('/login', function(req,res) {
  var email = req.body.email;
  var password = req.body.password;

  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM USERS where email = ?", [email], function(err, rows, fields) {
      if(rows != undefined ) {
        if (rows.length > 0) {
          var data = JSON.parse(JSON.stringify(rows))
          resolve(data[0])
        }
        else
          reject("Incorrect email address.")
      }
    })
  }).then((user) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, function (err, result) {
        if(result === true) {
          resolve(user)
        } else {
          reject("Incorrect Password");
        }
      });
    })
  }).then((user) => {
    req.session.user = user;
    console.log(req.session.user);
    res.json({
      status : 'success',
      message : "Logged In Successfully."
    })
  })
  .catch((err) => {
    return res.json({status : 'error', message : err})
  })
})

var checkUserSession = (req,res,next) =>  {
  if(req.session.user) {
     res.send("not authorized");
  } else {
    next();
  }
}

app.get('/profile', checkUserSession,function(req,res) {
  res.send("route accessible");
})

app.get('/logout', checkUserSession, function(req,res) {
  req.session.destroy(function(){
    console.log("user logged out.")
    // console.log(req.session.user);
    res.send("logged out");
 });
})


