const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  " sk_test_51MABK0LrX7Io1DVOt5UWBXCWEtf6Dk00fg4FMgHpSldTUlusIf4kT2PIUgm98lcsFlimr1qZhDiwmWp1QWokFmxV00K7FrzPKh "
);

// API

// App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello Baby"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BooM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "euro",
  });

  // OK- created

  response.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://127.0.0.1:5003/challenge-41fbc/us-central1/api
