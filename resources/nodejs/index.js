const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const bodyParser = require('body-parser');
const db = require('./app/model/index.js');
// const myMiddleware = require('./app/middleware/MyMiddleware.js'); // Adjust the path accordingly

var corsOptions = {
    origin:"*",
    methods:[
        'GET',
        'POST'
    ],
    allowedHeaders:[
        'Content-type',
        'X-Auth-Token'
    ]
}

// app.use(myMiddleware);
app.use(cors(corsOptions))
app.get('/get',(req,resp)=>{
    resp.send("server is working")
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
require("./app/config/RouteConfig.js")(app)

const PORT = process.env.PORT || 7000;

app.listen(PORT,()=>{
    console.log(`local server is running on http://customweb.adorncommerce.com:${PORT}`)
});
