import orderHistorySchema from "../../../Utility/orderHistorySchema";

const Handler = async (req, res) => {
  const email = req?.query?.email;
  await orderHistorySchema.find({ email }).exec((err, data) => {
    if (err) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(200).json({ data: data.reverse() });
    }
  });
};

export default Handler;
