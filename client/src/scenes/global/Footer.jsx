import React from 'react'
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";




 const Footer=()=> {
    const {
        palette: { neutral },
      } = useTheme();
      return (
        <Box 
        marginTop="70px" 
        padding="0px 20px" 
        border="1px solid black" 
        backgroundColor={shades.primary[100]}
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
        >

            <Box width="clamp(20%, 30%, 40%)"
            padding="30px"
            borderRight="1px solid black">
              <Typography
                variant="h4"
                fontSize="18px"
                fontWeight="bold"
                mb="30px"
                color={shades.primary[500]}
                
                
              >
                SLOOK
              </Typography>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat
              </div>
            </Box>
    
            <Box
             padding="30px 0px"
            >
              <Typography variant="h4" fontWeight="bold" fontSize="18px" mb="30px">
                ABOUT US
              </Typography>
              <Typography mb="30px">Careers</Typography>
              <Typography mb="30px">Our Stores</Typography>
              <Typography mb="30px">Terms & Conditions</Typography>
              <Typography mb="30px">Privacy Policy</Typography>
            </Box>
    
            <Box
            padding="30px 0px">
              <Typography variant="h4" fontWeight="bold" fontSize="18px" mb="30px">
                CUSTOMER CARE
              </Typography>
              <Typography mb="30px">Help Center</Typography>
              <Typography mb="30px">Track Your Order</Typography>
              <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
              <Typography mb="30px">Returns & Refunds</Typography>
            </Box>
    
            <Box width="clamp(20%, 25%, 30%)" padding="30px 0px">
              <Typography variant="h4" fontWeight="bold" fontSize="18px" mb="30px">
                CONTACT US
              </Typography>
              <Typography mb="30px">
                50 north Whatever Blvd, Washington, DC 10501
              </Typography>
              <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
                Email: mredwardroh@gmail.com
              </Typography>
              <Typography mb="30px">(222)333-4444</Typography>
            </Box>
          </Box>
        
      );
}


export default Footer


