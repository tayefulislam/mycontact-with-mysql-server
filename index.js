
const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const app = express()

const port = process.env.PORT || 5000;


//middle ware
app.use(cors())
app.use(express.json())


// database

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mycontact1"
})





con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");

    // const sql = "CREATE TABLE contacts (name VARCHAR(255),address VARCHAR(255))";

    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("table created")
    // })




})

// apis 

app.post('/api/insert', (req, res) => {

    const newContact = [req.body];

    console.log(newContact)


    const sql = "INSERT INTO contacts (name,address,email) VALUES ?"
    con.query(sql, [newContact], function (err, result) {
        if (err) throw err;
        res.send(result)
    })

})

app.listen(port, () => {
    console.log(port, 'server is runnting')
})