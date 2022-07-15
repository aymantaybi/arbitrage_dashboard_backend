var express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Trade = require("../models/trade");

router.get('/trades', (req, res) => {

    const { limit } = req.query;

    res.header('Access-Control-Allow-Origin', '*');

    Trade.find({}, (err, trades) => {

        res.json({ trades });
        
    })

   
});

module.exports = router;
