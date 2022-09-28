const stripe = require("stripe")(process.env.NEXT_PUBLIC_SECRET_KEY);

const Handler = async (req, res) => {
  if (req.method === "GET") {
    const sessionId = req?.query.sessionId;
    try {
      const checkoutSession = await stripe?.checkout?.sessions.retrieve(
        sessionId,
        {
          expand: ["payment_intent", "line_items.data"],
        }
      );
      const result = checkoutSession.metadata;
      res
        .status(200)
        .json({
          status: checkoutSession?.payment_status,
          email: checkoutSession.customer_details.email,
          result,
        });
    } catch (err) {
      console.log(err.message);
    }
  }
};

export default Handler;
