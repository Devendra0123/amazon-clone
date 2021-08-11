const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JFugjI2EOuqUaH5S0VMWfk2Lw3bMfedaHty5ia1IYbbyaB8b5lDWZt5qHu2ZO9vcgkYRmTv7IiDC9T6cnjpoYAZ00kk1JOJWd');

const app = express();

app.use(cors({
  origin: true,
}));

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("hello world");
});

app.post('/payments/create', async (req, res) =>{
    
  try{
    const total = await req.query.total;
    const amount = Number(total);
    console.log( `payment total>>$${amount/100}`);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
    });
    
    return res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
  }
  catch(err){
      console.log(err);
  }
   
})

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-774c9/us-central1/api