const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const path = require("path")
const authRouter= require('./routes/authRouter');
const userRouter=require('./routes/userRouter');
const paymentRouter=require('./routes/paymentRouter');
const adminRouter=require('./routes/adminRouter')

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));


app.listen(port,(error)=>{
        if (!error){
        console.log("server running on port"+ port);
    }
    else{
        console.log("Error:"+error);
    }
})

// DAtabase Connection with MongoDB

mongoose.connect("mongodb+srv://manjumurali3941:slook.in@cluster0.dpp85wr.mongodb.net/slook");

//API creation

app.get("/",(req,res)=>{
  res.send("Express App is Running")
})

//Routes 

app.use('/admin', adminRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/payment', paymentRouter)



// Image Storage Engine;

// const storage = multer.diskStorage({
//     destination : './upload/images',
//     filename: (req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })
// const upload = multer({
//     storage : storage
// })

// // Creating Uploading Endpoint 

// app.use('/images', express.static('upload/images'))

// app.post("/upload", upload.single('product'),(req,res)=>{
//     res.json({
//         success: 1,
//         image_url: `http://localhost:${port}/images/${req.file.filename}`
//     })
// })




