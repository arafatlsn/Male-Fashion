import dbConnect from "../../Utility/DbConnect";
import loadProductsSchema from "../../Utility/loadProductsSchema";

dbConnect();
const Handler = async(req, res) => {
  // load all products 
  if(req.method === 'GET'){
    await loadProductsSchema.find({}).exec((err, data) => {
      if(err){
        console.log(err.message)
      } else{
        res.status(200).json(data)
      }
    })
  }
}

export default Handler;