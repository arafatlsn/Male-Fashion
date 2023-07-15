import orderModel from "../../../Utility/orderModel";

const Handler = async (req, res) => {
  const sessionId = req.body.sessionId;
  const email = req.body.email;
  const order = req.body;
  order.email = email;
  order["date"] = new Date().toISOString();
  try {
    const findSession = await orderModel.findOne({ sessionId: sessionId });
    
    if (!findSession?.sessionId) {
      await orderModel(order).save((err) => {
        if (err) {
          console.log(err.message);
        } else {
          res.status(200).json({ message: "successfully added on db" });
        }
      });
    }
  } catch (err) {
    console.log(err.message);
  }
};

export default Handler;
