const express = require("express");
const mongoose = require('mongoose');
const api = require('./routes/api');
const app = express();
const port = 6969;


app.use("/api", api);


app.listen(port, async() => {

   await mongoose.connect('mongodb://localhost:27017/arbitrage',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`Sever listening on : ${port} `)
})