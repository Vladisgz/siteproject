const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("dotenv").config();

const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/pay", async (req, res) => {
  try {
    const { id: source, amount } = req.body.token;
    const paymentIntent = await Stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method: source,
      confirmation_method: "manual",
    });

    res
      .status(200)
      .json({ success: true, clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Payment failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
