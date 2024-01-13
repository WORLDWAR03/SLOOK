import React from 'react'
import './navbar.css'
import slook from "../../assets/slook.svg"
import {useDispatch, useSelector} from 'react-redux'
import { Badge, Box, IconButton } from '@mui/material'
import { 
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined,
    BookmarkBorderOutlined
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { shades } from '../../theme';
import { setIsCartOpen } from '../../state'


function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state)=> state.cart.cart)
  return (
    <Box
    display='flex'
    alignItems='center'
    width="100%"
    height="45px"
    color="black"
    position="fixed"
    top="0"
    left="0"
    zIndex="1"
    justifyContent="space-between"
    paddingX='20px'
    borderBottom='1px solid black'
    >

       <Box  
       display="flex"
       justifyContent="space-between"
       columnGap="15px"
       zIndex="2">
            <Box
           sx={{
            '&:hover': {
              border: "1px solid black",
              cursor:"pointer"
              },
              padding:"4px",
              borderRadius:'4px',
            } }
            

            >
             WOMEN
            </Box>
            <Box
             sx={{
              '&:hover': {
                border: "1px solid black",
                cursor:"pointer"
                },
                padding:"4px",
                borderRadius:'4px',
              } }  
            >
             MEN
            </Box>
            <Box
             sx={{
              '&:hover': {
                border: "1px solid black",
                cursor:"pointer"
                },
                padding:"4px",
                borderRadius:'4px',
              } }
              >
            EXPLORE
            </Box>
            <Box
             sx={{
              '&:hover': {
                border: "1px solid black",
                cursor:"pointer"
                },
                padding:"4px",
                borderRadius:'4px',
              } }
              >
              GIFTS
            </Box>
        
        </Box>
        <Box
        onClick={()=>navigate('/')}
        sx={{"&:hover":{cursor: "pointer"}}}
        color={shades.primary[500]}
        minWidth={"100px"}

        >
          <img src={slook} alt="" />
          
        </Box>

       
       <Box 
       display="flex"
       justifyContent="space-between"
       columnGap="px"
       zIndex="2">
       <IconButton sx={{color: "black"}}>
        <SearchOutlined/>
       </IconButton>
       <IconButton sx={{color: "black"}}>
        <PersonOutline/>
       </IconButton>
       <Badge
       badgeContent={cart.legth}
       color='primary'
       invisible={cart.legth === 0}
       sx={{
        "& .MuiBadge-badge": {
          right: 5,
          top: 5,
          padding: "0 4px",
          height: "13px",
        }
       }}

       >
       <IconButton 
       onClick={()=> dispatch(setIsCartOpen({}))}
       sx={{color: "black"}}>
        <BookmarkBorderOutlined/>
       </IconButton>

       </Badge>
      
       </Box>
      

    
    
    </Box>
  )
}

export default Navbar