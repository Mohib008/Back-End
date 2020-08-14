const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const app = express();

app.use(bodyParser.json());

const database = {
    users: [
        {
            id: "123",
            name: "Arsala",
            email: "arsala@gmail.com",
            password: "2345",
            entries: 0,
            joint: new Date()
        }, 
        {
            id: "155",
            name: "Mohib",
            email: "mohib.arsala@gmail.com",
            password: "12345",
            entries: 0,
            joint: new Date()
        }

    ]
}

app.get("/", (req, res)=> {
    res.send(database.users);
})

app.post("/signin", (req, res) => {
    bcrypt.compare("nz123", "$2a$10$Ph2kCRxs1gv6A0jI1iYn.OSnTDAGlLmlQHvnv4HDJpYVkd.XTsEVO", function(err, res) {
        console.log("First Guess", res);
    });
    bcrypt.compare("Mohib1", "$2a$10$Ph2kCRxs1gv6A0jI1iYn.OSnTDAGlLmlQHvnv4HDJpYVkd.XTsEVO", function(err, res) {
        console.log("Second Guess", res);
    });
    if(req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
            res.json("Success.");
        } else {
            res.status(400).json("error logging in!");
        }
})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
   /* bcrypt.hash(password, null, null, function (err, hash) {
       //store a hash in your password DB.
        console.log(hash);
    });*/
    database.users.push({
        id: "125",
        name: name,
        email: email,
        password: password,
        entries: 0,
        joint: new Date()
    })
    res.json(database.users[database.users.length-1]);
})

app.get("/profile/:id", (req, res) => {
        const { id } = req.params;
        let found = false;
        database.users.forEach(user => {
            if(user.id === id) {
                found = true;
                return res.json(user);
            }
        })
    if(!found) {
        res.status(400).json("Not found!");
    }
})

app.put("/image", (req, res)=> {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if(user.id === id) {
            found = true;
            user.entries++
            return res.json(user.entries);
        }
    })
if(!found) {
    res.status(400).json("Not found!");
}
})




app.listen(3000, ()=> {
    console.log("App runing in Port 3000!");
})