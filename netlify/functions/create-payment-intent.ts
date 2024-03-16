// eslint-disable-next-line @typescript-eslint/no-var-requires
import { Handler, HandlerEvent } from "@netlify/functions";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const handler: Handler = async (event: HandlerEvent) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        paymentIntent,
      }),
    };
  } catch (error) {
    console.log("create-payment-intent", error);

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};

export { handler };
