import mongoose from "mongoose";
const dbConnect = () => {
  mongoose.connect("mongodb+srv://todo-user:42U2jTjrxOXBip7w@cluster0.moy4n.mongodb.net/Male_Fashion?retryWrites=true&w=majority")
  .then(() => console.log("db connected"))
  .catch(err => console.log("DBConnect.js line 6",err.message))
}

export default dbConnect;