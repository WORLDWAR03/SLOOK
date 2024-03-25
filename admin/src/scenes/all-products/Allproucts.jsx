import { Box, Card, CardContent, CardMedia, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import AxiosInstance from '../../config/axioxInstance'
import useMediaQuery from "@mui/material/useMediaQuery";
import { BASEURL } from '../../constance/baseUrl';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {

  const sizes = product.sizes.map((sizeObj) => sizeObj.size);
  const quantities = product.sizes.map((sizeObj) => sizeObj.quantity);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate()
  return (
    <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: isSmallScreen ? '100%' : '25%',
      margin: '1rem',
    }}
    onClick={()=>navigate(`/productView/${product._id}`)}
  >
    <img
      component="img"
      height="auto"
      src={`${BASEURL}/uploads/${product?.image[0]}`}
      alt={product.name}
    />
    <Box p={2}
     sx={{
      "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
    }}

    >
      <Typography variant="h5" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Category: {product.category}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Subcategory: {product.subcategory}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Brand: {product.brand || 'N/A'}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Gender: {product.gender}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Color: {product.color}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sizes: {sizes.join(', ')} - Quantities: {quantities.join(', ')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Price: {product.price}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Description: {product.description}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Materials: {product.materials}
      </Typography>
      <Typography variant="body1" gutterBottom>
        New Price: {product.new_price}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Available: {product.available ? 'Yes' : 'No'}
      </Typography>
    </Box>
  </Card>

  );
  }


const Allproducts = () => {
  // Assuming you have an array of products coming from the admin
  const[products, setProducts]=useState([])

  useEffect(()=>{
    AxiosInstance.get('/admin/getProducts').then((response)=>{
      setProducts(response.data.data)
      console.log(products);
    })
  },[])
  
  // const products = [
  //   { id: 1, name: 'Product 1', description: 'This is product 1', price: 10 },
  //   { id: 2, name: 'Product 2', description: 'This is product 2', price: 20 },
  //   // Add more products here
  // ]

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      height="90vh"
      sx={{
        overflowY :  "scroll",
        "&::-webkit-scrollbar": {
          display: "none"
          } /* Chrome */
      }}

    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  )
}

export default Allproducts