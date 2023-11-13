const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.SERVER_PORT || 4004;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const Stripe = require("stripe")(stripeSecretKey);

const cors = require("cors");
app.use(cors()); // локально

// app.use(
//   cors({ origin: "https://siteproject-liard.vercel.app", credentials: true }),
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/pay", async (req, res) => {
  console.log(req.body.token);
  try {
    await Stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    });

    res.status(200).json({ success: true, message: "Payment succeeded" });
  } catch (e) {
    console.error("Payment error: ", e);
    res.status(500).json({ success: false, message: "Payment failed" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});

module.exports = app;
