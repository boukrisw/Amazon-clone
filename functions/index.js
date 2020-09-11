const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response, request } = require("express");
const stripe = require("stripe")(
  "sk_test_51HQB7BEbrEJyUBka8FGaTAxv3Y5Mq82bpWW5LBPrJkkdkR0UcnxqXM4tkDR88m9mYdGJMD0GqR8RZJfAcYAMUzTm00yvSBi8vL"
);

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origine: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => {
  response.send("wesh a Waliiiid");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOMM ! for :", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);
