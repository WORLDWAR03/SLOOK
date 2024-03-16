import { Box, Pagination, Tab, Tabs, Typography, useMediaQuery,Card , CardMedia,CardContent,Grid,Button} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AxiosInstance from '../../const/axiosinstance';
import { makeStyles } from '@mui/system';
import { BASEURL } from '../../const/baseUrl';



const ProductCard = ({ product }) => {
  // const { image, description, price } = product;
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));


  return (
    <Card style={{position: 'relative',
    minHeight:"200px"
    }}>
      <img
        component="img"
        height="200px"
        src={`${BASEURL}/uploads/${product?.image[0]}`}
        alt={""}
      />
      
      <div style={{
                          position: 'absolute', 
                          color: 'black', 
                          top:'',
                          bottom: 10, 
                          left: '50%', 
                          transform: 'translateX(-50%)'
                        }}  variant="h6" component="h3" >
      ${product.price}
        </div>
     
          
        <Typography variant="h5" component="h2">
          {}
        </Typography>
      
        
        {/* <Button variant="contained">Add to Cart</Button> */}
    
    </Card>
  );
};




const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue]= useState("all");
    const items = useSelector((state)=> state.cart.items);
    const breakPoint = useMediaQuery("(min-width:600px)");
    const [page,setPage] = useState(1)
    const [item, setItem]=useState();
    console.log("items", items);
    

    const handlePageChange =(e,value)=>{
      setPage(value)
    }
  
    const handleChange = (event, newValue)=> {
        setValue(newValue) 
    }


    const getProducts=()=>{
      try {
        AxiosInstance.get("/users/getProducts",{params:{page}})
        .then(response=>{ 
          setItem(response.data.data)
        })

      } catch (error) {
        
      }
    }

    
    
    // const topRatedItems = items.filter(
    //     (item) => item.attributes.category === "topRated"
    //   );
    //   const newArrivalsItems = items.filter(
    //     (item) => item.attributes.category === "newArrivals"
    //   );
    //   const bestSellersItems = items.filter(
    //     (item) => item.attributes.category === "bestSellers"
    //   );

      useEffect(() => {
        getProducts();
      }, [page]); 
  return (
    <div>
      <Box width="100%" margin="25px 0px"
      paddingX="5px"> 
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {/* {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "newArrivals" &&
          newArrivalsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bestSellers" &&
          bestSellersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))} */}
      </Box>
      <Grid

      sx={{
        justifyContent:"center",
      }}
      container 
      
     spacing={0.5}

      >

{item?.map((item,index)=>(
  <Grid item minWidth="250px" marginY="1px" xs={2} sm={4} md={4}>
        <ProductCard product={item} key={index}/>
        </Grid>
      ))}

      </Grid>

      


    </Box>


<Box
sx={{
  // "& > *": {
    justifyContent:"center",
    display:'flex',
  // },
  margin:"10px"
}}
>
<Pagination count={10} page={page} color="standard"
    onChange={handlePageChange} />
</Box>
   
    </div>
  )
}

export default ShoppingList
