import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, Modal, Fade, Backdrop, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import AxiosInstance from "../../config/axioxInstance";
import { useParams } from "react-router-dom";
import { BASEURL } from "../../constance/baseUrl";

const ImageContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const EditButton = styled(Button)({
  marginLeft: 2,
});

const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [open, setOpen] = useState(false);
  const [imageToEdit, setImageToEdit] = useState(null);
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));

  useEffect(() => {
    try {
      AxiosInstance.get("/admin/product", { params: { id } })
        .then((response) => setProduct(response.data.data));
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  const handleOpen = (image) => {
    setImageToEdit(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteImage = (image) => {
    // Implement your delete image functionality here
  };

  return (
    <Box margin="20px"
      sx={{
        overflowY:"scroll",
        "&::-webkit-scrollbar":{ display:"none"
            }}}
            height="90vh"
    >
      <Grid container spacing={2}>

        <Grid item xs={12}>
              <Typography variant="h1" gutterBottom
              fontWeight={'bold'}  paddingBottom={'5px'}>
                 SLOOK
              </Typography>
        
             <Typography variant="h4" letterSpacing="1px" gutterBottom>
             {product.name}
             </Typography>
             <Grid container spacing={1}
           >
  
              
            <Grid item xs={6} sm={3}>
              <Typography variant="body1" gutterBottom>
                Category: {product.category}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body1" gutterBottom>
                Subcategory: {product.subcategory}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body1" gutterBottom>
                Gender: {product.gender}
              </Typography>
            </Grid>
          
            <Grid item xs={6} sm={3}>
              <Typography variant="h5" gutterBottom>
              price: {product.price}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body1" gutterBottom>
                Available: {product.available ? "Yes" : "No"}
              </Typography>
            </Grid>

           
            <Grid item xs={12} sm={3}>
              <Typography variant="body1" gutterBottom>
                Materials: {product.materials}
              </Typography>
            </Grid>
          </Grid>

          <Grid>
          <Typography variant="h6" gutterBottom>
            Sizes:
          </Typography>
          <ul>
            {product?.sizes?.map((size) => (
              <li key={size._id}>
                {size.size} ({size.quantity} available)
              </li>
            ))}
          </ul>
          </Grid>
        </Grid>
        
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Images:
          </Typography>
          <Grid container spacing={1}>
            {product?.image?.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={image}>
                <ImageContainer>
                  <img
                    src={`${BASEURL}/uploads/${image}`}
                    alt={`Product image ${index}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </ImageContainer>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <EditButton
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleOpen(image)}
                    >
                      Replace
                    </EditButton>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => handleDeleteImage(image)}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      

      {imageToEdit && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          closeAfterTransition
          // slots={{ backdrop: Backdrop }}
          // slotProps={{
          //   backdrop: {
          //     sx: {
                 
          //      },
          //    },
  // }}
          
         
        >
          <Fade in={open}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Replacing image: {imageToEdit}
              </Typography>
              <Box mb={2}>
                <img
                  src={`${BASEURL}/uploads/${imageToEdit}`}
                  alt={`Product image to edit`}
                  style={{ 
                  top: "50%",
                  left: "10%", 
                  position: "relative",
                }}
                  
                />
              </Box>
              {/* Add yourreplace image form or functionality here */}
            </Box>
          </Fade>
        </Modal>
      )}
    </Box>
  );
};

export default ProductCard;