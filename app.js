const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const fs = require("fs");

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))//for serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')// set the template engine as pug 
app.set('views',path.join(__dirname,'views'))// set the views directory

//END POINTS
app.get('/',(req, res)=>{
    const params = {}
    res.status(200).render('home.pug',params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`This applicatin will be working on port ${port}`);
})