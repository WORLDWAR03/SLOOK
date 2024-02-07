import React, { useEffect, useState } from "react";
import "./navbar.css";
import slook from "../../assets/slook.svg";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
  BookmarkBorderOutlined,
  
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import Login from '../../components/Login'

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isNavLinksActive, setIsNavLinksActive] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const handleScroll = () => {
    setIsSearchBarOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div id="nav" className="navbar-wrapper">
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        height="45px"
        color="black"
        position="fixed"
        top="0"
        left="0"
        zIndex="9"
        paddingX="30px"
        borderBottom="1px solid black"
        backgroundColor="white"
      >
        <Box
          className={`nav-links  ${isNavLinksActive ? "" : ""}`}
          display="flex"
          justifyContent="start"
          columnGap="10px"
          zIndex="2"
          width="33%"
        >
          <Box
            sx={{
              "&:hover": {
                border: "1px solid black",
                cursor: "pointer",
              },
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            WOMEN
          </Box>
          <Box
            sx={{
              "&:hover": {
                border: "1px solid black",
                cursor: "pointer",
              },
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            MEN
          </Box>
          <Box
            sx={{
              "&:hover": {
                border: "1px solid black",
                cursor: "pointer",
              },
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            EXPLORE
          </Box>
          <Box
            sx={{
              "&:hover": {
                border: "1px solid black",
                cursor: "pointer",
              },
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            GIFTS
          </Box>
        </Box>
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.primary[500]}
          minWidth={"100px"}
          width={"33%"}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <img
            src={slook}
            alt=""
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Box>

        <Box
          className={`nav-links ${isNavLinksActive ? "" : ""}`}
          display="flex"
          justifyContent={"end"}
          textAlign={"left"}
          columnGap="10px"
          width={"33%"}
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }} onClick={handleSearchClick}>
            <SearchOutlined />{" "}
          </IconButton>
          <IconButton sx={{ color: "black" }}
          onClick={()=> navigate("/login")}
          >
            <PersonOutline />

          </IconButton>
          <Badge
            badgeContent={cart.legth}
            color="primary"
            invisible={cart.legth === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <BookmarkBorderOutlined />
            </IconButton>
          </Badge>
        </Box>

        {isSearchBarOpen && (
          <Box
            className="search-bar-container"
            position="absolute"
            top="45px"
            left="0"
            width="100%"
            zIndex="10"
            backgroundColor="white"
            borderTop="1px solid black"
            borderBottom="1px solid black"
            padding="8px"
          >
            {" "}
            <Box display="flex" alignItems="center" columnGap="10px">
              {" "}
              <IconButton sx={{ color: "black" }}>
                {" "}
                {/* <SearchOutlined />{" "} */}
              </IconButton>{" "}
              <input
                type="text"
                placeholder="Search..."
                style={{
                  border: "none",
                  outline: "none",
                  flexGrow: 1,
                  padding: "5px",
                  borderRadius: "5px",
                  fontSize: "16px",
                  backgroundColor: "#f2f2f2",
                  width: "100%",
                }}
              />{" "}
            </Box>{" "}
          </Box>
        )}
    

      

        
       

        <Box
          className="menu-icon"
          onClick={() => setIsNavLinksActive(!isNavLinksActive)}
        >
          <MenuOutlined />
        </Box>
        </Box>

      <Box className={`nav-links ${isNavLinksActive ? "active" : ""}`}>
        <div className="nav-dropdown">
          <Box
            className={`nav-links ${isNavLinksActive ? "active" : ""}`}
            display="flex"
            alignContent=""
            columnGap="10px"
            zIndex="2"
            width="33%"
          >
            <Box
              sx={{
                "&:hover": {
                  border: "1px solid black",
                  cursor: "pointer",
                },
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              WOMEN
            </Box>
            <Box
              sx={{
                "&:hover": {
                  border: "1px solid black",
                  cursor: "pointer",
                },
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              MEN
            </Box>
            <Box
              sx={{
                "&:hover": {
                  border: "1px solid black",
                  cursor: "pointer",
                },
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              EXPLORE
            </Box>
            <Box
              sx={{
                "&:hover": {
                  border: "1px solid black",
                  cursor: "pointer",
                },
                padding: "4px",
                borderRadius: "4px",
              }}
            >
              GIFTS
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Navbar;
