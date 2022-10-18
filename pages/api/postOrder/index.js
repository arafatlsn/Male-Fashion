import orderSchema from "../../../Utility/orderHistorySchema";

const Handler = async (req, res) => {
  const sessionId = req.body.sessionId;
  const email = req.body.email
  const order = req.body;
  order.email = email
  const findSession = await orderSchema.findOne({ sessionId: sessionId });
  if (!findSession?.sessionId) {
    await orderSchema(order).save((err) => {
      if (err) {
        console.log(err.message);
      } else {
        res.status(200).json({ message: "successfully added on db" });
      }
    });
  }
};

export default Handler;
