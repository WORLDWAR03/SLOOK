import React from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavigateNextIcon  from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { shades } from '../../theme';
import { useMediaQuery, Typography, IconButton, Box, Button } from '@mui/material';
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
        position="absolute"
        bottom="10%"
        width="100%"
        height="100px"
        alignContent={'center'}
        alignItems={"center"}
        textAlign={"center"}
        display="flex"
      
        >

          <Box 
          width="33%"
          height="50px"
          ></Box>
          <Box
           width="33%"
           height="50px"

           
          >

          <div
                  style={{
                    type:"button" ,
                    height: "auto",
                    margin:"0 auto",
                    position:"relative",
                    color:"black",
                    backgroundColor:`${shades.secondary[500]}`,
                    bottom:"10%",
                    minWidth:"100px",
                    maxWidth:"150px",
                    objectFit:'contain',
                    textAlign:"contain",
                    borderRadius:"5px",
                    border:"1px solid black",
                    fontSize:"",

                  }} 
          >
          
            <p style={{
              width: "auto",
              textAlign: "center"

            }}>
            
             CATEGORY
            </p>
            
          
         
          </div>


          </Box>

          <Box
                    width="33%"
                    height="50px"

          >

          </Box>
         
       
        </Box>
       

       


      </Box>
  
  </Box>
  
 

  )


}

export default MainCarousel

