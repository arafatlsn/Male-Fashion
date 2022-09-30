import orderSchema from "../../../Utility/orderHistorySchema";

const Handler = async (req, res) => {
  const sessionId = req.body.sessionId;
  const order = req.body;
  const findSession = await orderSchema.findOne({ sessionId: sessionId });
  if (!findSession?.sessionId) {
    await orderSchema(order).save((err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("save order on db");
        res.status(200).json({ message: "successfully added on db" });
      }
    });
  } else {
    console.log(req.body.sessionId);
  }
};

export default Handler;
