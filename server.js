const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const img = require("./controllers/img");

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'mohibml1',
    database : 'postgres'
  }
});


const app = express();

db.select("*").from("users").then(data => {
  console.log(data);
});

app.use(cors());
app.use(bodyParser.json());


app.get("/", (req, res) => {res.json(database.users)});

app.post("/signin", signin.handleSignin(db, bcrypt));

app.post("/register", (req, res) => {register.handleRegister(req, res, db, bcrypt)});

app.get("/profile/:id", (req, res)=> {profile.handleProfile(req, res, db)});

app.put("/image", (req, res)=> {img.handleImg(req, res, db)});



app.listen(3000, () => {
    console.log("App is runing on port 3000!");
});


/*
    - response = this is working
    - /sing in --> POST (because we add the user info on server) and we expect a ==> succes/fail response
    - /register --> POST (because we add the user info on server) ==> will return the new USER object
    - /profile/:userID ==> GET user
    - /image ==> PUT (everytime the user uploads an image the rank of the user is affected) will retrieve the updated USER
 
*/