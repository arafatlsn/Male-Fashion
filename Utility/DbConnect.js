import mongoose from "mongoose";
const dbConnect = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/Male_Fashion')
  .then(() => console.log("db connected"))
  .catch(err => console.log("DBConnect.js line 6",err.message))
}

export default dbConnect;
