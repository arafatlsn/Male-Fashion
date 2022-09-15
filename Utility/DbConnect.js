import mongoose from "mongoose";
const dbConnect = () => {
  mongoose.connect(process.env.DB_URL)
  .then(() => console.log("db connected"))
  .catch(err => console.log("DBConnect.js line 6",err.message))
}

export default dbConnect;
