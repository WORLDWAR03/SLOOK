const PRODUCT = require('../models/productSchema');


const getProducts=(req,res)=>{
try {
    const page = req.query.page || 1;
    const dataPerPage = 6;
    PRODUCT.find()
      .skip((page - 1) * dataPerPage)
      .limit(dataPerPage)
      .then((resp) => {
        res.status(200).json({ data: resp });
      })
      .catch((resp) => {
        res.status(400).json({ message: "something went wrong" });
      });
  } catch (error) {
    res.status(400).json({ message: "unautherized request" });
  }
}

module.exports={
    getProducts
}