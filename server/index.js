const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.SERVER_PORT;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const Stripe = require("stripe")(stripeSecretKey);

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/pay", async (req, res) => {
  console.log("Payment request received at: ", new Date());
  console.log("Token ID: ", req.body.token.id);
  console.log("Amount: ", req.body.amount);

  try {
    const startTime = new Date().getTime();
    await Stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    });

    const endTime = new Date().getTime();

    console.log("Stripe API respjnce reveived at: ", new Date());
    console.log("Time taken for Stripe request: ", endTime - startTime, "ms");

    res.status(200).json({ success: true, message: "Paynemt succeeded" });
  } catch {
    res.status(500).json({ success: false, message: "Payment failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});

module.exports = app;
