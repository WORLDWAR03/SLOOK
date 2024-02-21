const PRODUCT = require('../models/productSchema');

//Add a new Product  to the data base

const addProduct =(req,res)=>{
    try {
            // PRODUCT.findOne({}, {}, { sort: { id: -1 } })
            //   .then(lastProduct => {
            //     let id;
            //     if (lastProduct) {
            //       id = lastProduct.id + 1;
            //     } else {
            //       id = 1;
            //     }
          
            //     const newProduct = new PRODUCT({
            //       id,
            //       name: req.body.name,
            //       category: req.body.category,
            //       subcategory: req.body.subcategory,
            //       brand: req.body.brand,
            //       color: req.body.color,
            //       gender: req.body.gender,
            //       sizes: [
            //         { size: 'XS', quantity: req.body.quantity.XS },
            //         { size: 'S', quantity: req.body.quantity.S },
            //         { size: 'M', quantity: req.body.quantity.M },
            //         { size: 'L', quantity: req.body.quantity.L },
            //         { size: 'XL', quantity: req.body.quantity.XL },
            //         { size: 'XXL', quantity: req.body.quantity.XXL },
            //         { size: 'XXXL', quantity: req.body.quantity.XXXL }
            //       ],
            //       price: req.body.price,
            //       description: req.body.description,
            //       image: req.body.image,
            //       materials: req.body.materials,
            //       new_price: req.body.new_price
            //     });
          
            //     newProduct.save().then(product => {
            //       console.log(product);
            //       res.status(201).json({
            //         success: true,
            //         message: "new product added successfully"
            //       });
            //     }).catch(err => {
            //       console.log(err);
            //     });
            //   })
            //   .catch(err => {
            //     console.log(err);
            //   });
        console.log(req.query.params)
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