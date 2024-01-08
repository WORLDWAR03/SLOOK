import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Badge, Box, IconButton } from '@mui/material'
import { 
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { shades } from '../../theme';


function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
    justifyContent="space-evenly"
    >

        <Box
        display="flex"
        >
            <div>
             WOMEN
            </div>
            <div>
             MEN
            </div>
            <div>
            EXPLORE
            </div>
        
        </Box>
        <Box
        onClick={()=>navigate('/')}
        sx={{"&:hover":{cursor: "pointer"}}}
        color={shades.primary[500]}
        
        >
          SLOOK
        </Box>

       
       <Box 
       display="flex"
       justifyContent="space-between"
       columnGap="20px"
       zIndex="2">
       <IconButton sx={{color: "black"}}>
        <SearchOutlined/>
       </IconButton>
       <IconButton sx={{color: "black"}}>
        <PersonOutline/>
       </IconButton>
       <IconButton sx={{color: "black"}}>
        <SearchOutlined/>
       </IconButton>
       </Box>
      

    
    
    </Box>
  )
}

export default Navbar