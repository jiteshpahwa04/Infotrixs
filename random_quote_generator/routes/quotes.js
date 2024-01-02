const express = require("express");
const Quote = require("../models/Quote");
const router = express.Router();

const url = 'https://api.api-ninjas.com/v1/quotes';
const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': 'Kg4+1A/q1ak0O5F9RU/Fsw==gOH83GH7APkg9tVi'
  }
};

router.get("/newQuote", async(req, res)=>{
    try{
        const response = await fetch(url, options);
        const result = await response.json();

        const quote = await Quote.create({
            title: result[0]["quote"],
            author: result[0]["author"],
            category: result[0]["category"]
        })

        return res.status(200).json({
            quote: result[0].quote
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            error: err.message,
        })
    }
})

router.put("/updateQuote", async(req, res)=>{
    try{
        const {id} = req.body;
        const {updatedQuote} = req.body;

        const newQuote = await Quote.findByIdAndUpdate(
            id,
            {
                title: updatedQuote,
            },
            {new: true},
        )

        return res.status(200).json({
            message: "Updated Quote",
            quote: updatedQuote
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            error: err.message,
        })
    }
})

router.delete("/deleteQuote", async(req, res)=>{
    try{
        const {id} = req.body;

        const deltedQuote = await Quote.findByIdAndDelete(id)

        return res.status(200).json({
            message: "Deleted Quote"
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            error: err.message,
        })
    }
})

module.exports = router;