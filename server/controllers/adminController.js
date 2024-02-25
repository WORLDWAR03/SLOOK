const PRODUCT = require('../models/productSchema');

const multer = require('multer');


//Add a new Product  to the data base

const addProduct =(req,res)=>{
    try {

    const fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, "./upload/images/");
        },
        filename: (req, file, cb) => {
          cb(null, Date.now() + "-" + file.originalname);
        },
      });
      const upload = multer({
        storage: fileStorage,}).array("image", 10)
       upload(req, res, (err)=>{
         
        PRODUCT.findOne({}, {}, { sort: { id: -1 } })
        .then(lastProduct => {
          let id;
          if (lastProduct) {
            id = lastProduct.id + 1;
          } else {
            id = 1;
          }
            const newProduct = new PRODUCT({
                  id,
                  name: req.query.name,
                  category: req.query.category,
                  subcategory: req.query.subcategory,
                  brand: req.query.brand,
                  color: req.query.color,
                  gender: req.query.gender,
                  sizes: [
                    { size: 'XS', quantity: req.query.sizes[0].quantity },
                    { size: 'S', quantity: req.query.sizes[1].quantity},
                    { size: 'M', quantity: req.query.sizes[2].quantity },
                    { size: 'L', quantity: req.query.sizes[3].quantity },
                    { size: 'XL', quantity: req.query.sizes[4].quantity },
                    { size: 'XXL', quantity: req.query.sizes[5].quantity },
                    { size: 'XXXL', quantity: req.query.sizes[6].quantity}
                  ],
                  price: req.query.price,
                  description: req.query.description,
                  image: req.files.map((file) => file.filename),
                  materials: req.query.materials,
                  new_price: req.query.new_price
                });
          
                newProduct.save().then(product => {
                  console.log(product);
                  res.status(201).json({
                    success: true,
                    message: "new product added successfully"
                  });
                }).catch(err => {
                  console.log(err);
                });
              })
              .catch(err => {
                console.log(err);
              });
        console.log(req.query)

       })


    } catch (error) {
        
    }
   
    
};

//API for delete  a specific  product by id

const remonveProduct =(req,res)=>{
         try {
            PRODUCT. findOneAndDelete({id:req.body.id})
            .then((resp)=>{
            console.log("Removed")
            console.log(resp);
            res.json({
              status:true,
              name:req.body.name,
              message:"Deleted Successfully!"
         })})
         } catch (error) {
            
         }
} 








module.exports ={
    addProduct,
    remonveProduct
}