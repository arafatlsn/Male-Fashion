import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({})

export default mongoose.models.product || mongoose.model("product", productsSchema);