import mongoose from "mongoose";

const orderHistory = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  sessionId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  order: {
    type: Array,
    required: true,
  },
});

export default mongoose.models.order || mongoose.model("order", orderHistory);
