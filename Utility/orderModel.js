import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  sessionId: {
    type: String,
    required: true,
  },
  order: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.order || mongoose.model("order", orderSchema);
