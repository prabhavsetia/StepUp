const express = require("express");
const path = require("path");
const app = express();
const port = 80;
const fs = require("fs");
const bodyParser = require("body-parser");


//Mongoose 
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    const contactSchema = new mongoose.Schema({
        name: String,
        phone: String,
        email: String
    }); 

    const Contact = mongoose.model('contact', contactSchema);


    //EXPRESS SPECIFIC STUFF
    app.use('/static', express.static('static'))//for serving static files
    app.use(express.urlencoded())

    //PUG SPECIFIC STUFF
    app.set('view engine', 'pug')// set the template engine as pug 
    app.set('views', path.join(__dirname, 'views'))// set the views directory

    //END POINTS
    app.get('/', (req, res) => {
        const params = {}
        res.status(200).render('home.pug', params);
    })
    app.get('/contact', (req, res) => {
        const params = {}
        res.status(200).render('contact.pug', params);
    })
    app.post('/contact', (req, res) => {
        var myData = new Contact(req.body);
        myData.save().then(() => {
            res.send("This item has been saved to the database")
        }).catch(() => {
            res.status(400).send("item was not saved to the databse")
        });

        // res.status(200).render('contact.pug');
    })

    // START THE SERVER
    app.listen(port, () => {
        console.log(`This applicatin will be working on port ${port}`);
    })
}