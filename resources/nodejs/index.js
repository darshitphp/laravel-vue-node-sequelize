const express = require('express');
const app = express();
const cors = require('cors')
require("dotenv").config();
const bodyParser = require('body-parser');
const db = require('./app/model/index.js');


var corsOptions = {
    origin:"*",
    methods:[
        'GET',
        'POST'
    ],
    allowedHeaders:[
        'Content-type'
    ]
}

app.use(cors(corsOptions))
app.get('/get',(req,resp)=>{
    resp.send("server is working")
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
require("./app/config/RouteConfig.js")(app)

const PORT = process.env.PORT || 7000;

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});
