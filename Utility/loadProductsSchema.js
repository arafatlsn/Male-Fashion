import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  cartQuantity: {
    type: Number,
    required: true,
    WritableStream: true
  },
  category: {
    type: String,
    required: true,
  },
});

export default mongoose.models.product ||
  mongoose.model("product", productsSchema);
