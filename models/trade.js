const mongoose = require('mongoose');

// Creating Schemas
const tradeSchema = new mongoose.Schema({
    "blockNumber":String,
    "pair": String,
    "side":String,
    "amountIn": String,
    "amountOutMin": String,
    "amountOut": String
})
 
const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;

 