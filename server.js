const fs = require('fs');
const express = require("express");
const formidable = require('express-formidable');


const app = express();

app.listen(3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

app.use(express.static("public"));
app.use(formidable());
app.post('/create-post', function (req, res) {
    console.log('/create-post')
    console.log(req.fields);
    fs.writeFile('./data/posts.json',JSON.stringify( req.fields), function (error) {
        // do something
    });
});

