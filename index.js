const express = require("express");
const api = require('./routes/api');
const app = express();
const port = 6969;

app.use("/api", api);


app.listen(port, () => {
    console.log(`Sever listening on : ${port} `)
})