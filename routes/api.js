var express = require('express');

const { MongoClient } = require('mongodb');

const mongoClient = new MongoClient(url);

const router = express.Router();

var data = [
    {
        "blockNumber": "15376048",
        "pair": "AXS-ETH",
        "side": "BUY",
        "amountIn": "114693",
        "amountOutMin": "391396677508131098",
        "amountOut": "391844932944906372"
    },
    {
        "blockNumber": "15376048",
        "pair": "SLP-ETH",
        "side": "BUY",
        "amountIn": "114693",
        "amountOutMin": "391396677508131098",
        "amountOut": "391844932944906372"
    },
    {
        "blockNumber": "15376048",
        "pair": "BNB-ETH",
        "side": "BUY",
        "amountIn": "114693",
        "amountOutMin": "391396677508131098",
        "amountOut": "391844932944906372"
    }
]

router.get('/trades', (req, res) => {

    const { limit } = req.query;

    res.header('Access-Control-Allow-Origin', '*');

    res.json({ data: data.slice(0, limit) });
});

module.exports = router;
