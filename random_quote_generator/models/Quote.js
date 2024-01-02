const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    title: {
        type: String,
        req: true,
    },
    author: {
        type: String,
        req: true,
    },
    category: {
        type: String,
        req: true,
    }
})

const Quote = mongoose.model("Quote", QuoteSchema);
module.exports = Quote;