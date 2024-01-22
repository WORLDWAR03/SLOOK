import React from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavigateNextIcon  from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { shades } from '../../theme';
import { useMediaQuery, Typography, IconButton, Box } from '@mui/material';
import red from "../../assets/1.jpg"

const importAll = (r) =>
r.keys().reduce((acc, item)=>{
  acc[item.replace("./", "")]= r(item);
  return acc;
},{});

const heroTextureImports = importAll(
  require.context("../../assets",false, /\.(png|jpg|jpeg|svg)$/)
)

const MainCarousel=()=> {
  const isNonMobile = useMediaQuery("(min-width:600px");
  return (
    
  
   

  
  <Box
  
  style={{
    width:"100%",
    position: "relative"
  }}
  
  >
      <Box >
        <img
        src={red}
        alt={`carousel`}
        style={{
          // width: "auto",
          height: "700px",
          objectFit:"cover",
          width:"100%",
          // backgroundAttachment: "fixed",
          // padding:"10px",
          // backgroundColor: "black"
          
        }}
        />
        <Box
        color="black"
        padding="15px"
        backgroundColor={shades.secondary[500]}
        position="absolute"
        bottom="10%"
        left={isNonMobile ? "46%" : "40%"}
        right={isNonMobile ? undefined : "0"}
        width="auto"
        textAlign={"center"}
        borderRadius={"5px"}
        border={"1px solid black"}
        fontSize={"18px"}
        >
          <Typography>
          CATEGORY
          </Typography>
       
        </Box>
       

       


      </Box>
  
  </Box>
  
 

  )


}

export default MainCarousel

