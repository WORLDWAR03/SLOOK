import { Box, Button, TextField, Grid, Fab, useTheme  } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import AddIcon from '@mui/icons-material/Add';
import { tokens } from "../../theme";

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  category: yup.string().required("required"),
  subcategory: yup.string().required("required"),
  brand: yup.string().required("required"),
  color: yup.string().required("required"),
  gender: yup.string().required('Required'),
  sizes: yup.array().of(
    yup.object({
      size: yup.string().required('Required'),
      quantity: yup.number().required('Required').min(0, 'Must be greater than or equal to 0'),
    })
  ),
  price: yup.number().required('Required').min(0, 'Must be greater than or equal to 0'),
  description: yup.string().required('Required'),
  image: yup.string().required('Required'),
  materials: yup.string().required('Required'),
  new_price: yup.number().test('new_price', 'Required when price is greater than 0', (value, context) => {
    const { price } = context.parent;
    return price <= 0 || value !== null;
  }),
});

const values = {
  name: '',
  category: '',
  subcategory: '',
  brand: '',
  color: '',
  gender: '',
  sizes: [
    { size: 'XS', quantity: 0 },
    { size: 'S', quantity: 0 },
    { size: 'M', quantity: 0},
    { size: 'L', quantity: 0},
    { size: 'XL', quantity: 0},
    { size: 'XXL', quantity: 0 },
    { size: 'XXXL', quantity: 0},
  ],
  price: 0,
  description: '',
  image: '',
  materials: '',
  new_price: 0,
};
  


// const Addproduct = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");

//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const handleFormSubmit = (values) => {
//     console.log(values);
//   };

  // const handleSizeQuantityChange = (index, event) => {
  //   const newSizes = [...values.sizes];
  //   newSizes[index].quantity = event.target.value;
  //   Formik.setFieldValue('sizes', newSizes);
  // };

  // const handleSizeQuantityChange = (index, event) => {
  //   const newSizes = [...values.sizes];
  //   newSizes[index].quantity = event.target.value;
  //   handleChange({ target: { name: 'sizes', value: newSizes } });
  // };

  const Addproduct = ({ handleChange, handleBlur, touched, errors }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
  
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    const handleFormSubmit = (values) => {
      console.log(values);
    };
  
    const handleSizeQuantityChange = (index, event) => {
      const newSizes = [...values.sizes];
      newSizes[index].quantity = event.target.value;
      handleChange({ target: { name: 'sizes', value: newSizes } });
    };


  return (
    <Box 
    m="20px 20px 60px 20px"
    height="90vh"
    overflow-y="scroll"
    sx={{
      overflowY :  "scroll",
      "&::-webkit-scrollbar": {
        display: "none"
        } /* Chrome */
    }}
     >
      <Header title="ADD NEW PRODUCT" subtitle="Create a New Product For Sale"
       />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={values}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.category}
                name="category"
                error={!!touched.category && !!errors.category}
                helperText={touched.category && errors.category}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Subcategory"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.subcategory}
                name="subcategory"
                error={!!touched.subcategory && !!errors.subcategory}
                helperText={touched.subcategory && errors.subcategory}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Brand Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.brand}
                name="brand"
                error={!!touched.brand && !!errors.brand}
                helperText={touched.brand && errors.brand}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Color Of the Product"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.color}
                name="color"
                error={!!touched.color && !!errors.color}
                helperText={touched.color && errors.color}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Gender"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gender}
                name="gender"
                error={!!touched.gender && !!errors.gender}
                helperText={touched.gender && errors.gender}
                sx={{ gridColumn: "span 2" }}
              />
           <Box
           width="100%"
           sx={{gridColumn: "span 4",
          height:"10px"}}

           >
           <Header subtitle="Add product quantity in all sizes"/>
           </Box>

              {values.sizes.map((size, index) => (
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                label={size.size}
                onBlur={handleBlur}
                onChange={(event) => handleSizeQuantityChange(index, event)}
                name={`sizes[${index}].quantity`}
                error={!!touched.sizes && !!errors.sizes && !!errors.sizes[index] && !!errors.sizes[index].quantity}
                helperText={touched.sizes && touched.sizes[index] && errors.sizes && errors.sizes[index] && errors.sizes[index].quantity}
              />
              ))}
    


              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 1" }}
              />

            <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />


          
<Box width="100%"
minHeight='200px'
backgroundColor={`${colors.primary[400]}`}

sx={{ gridColumn: "span 4" ,
      paddingTop: "5px"}}

>

<label htmlFor="upload-photo"
>
  <input
    style={{ display: 'none',
   }}
    component="span"
    id="upload-photo"
    name="upload-photo"
    type="file"
    label="Add picture"
    onBlur={handleBlur}
    onChange={handleChange}
    value={values.image}
    error={!!touched.image && !!errors.image}
    helperText={touched.image && errors.image}
    sx={{ gridColumn: "span 4",
          margin: "20px" }}
  />
<Fab color="secondary" size="small" component="span" aria-label="add" variant="extended"

>
    <AddIcon />Upload photo
  </Fab>
</label>

</Box>     




              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Materials"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.materials}
                name="materials"
                error={!!touched.materials && !!errors.materials}
                helperText={touched.materials && errors.materials}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="New price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.new_price}
                name="new_price"
                error={!!touched.new_price && !!errors.new_price}
                helperText={touched.new_price && errors.new_price}
                sx={{ gridColumn: "span 2" }}
              />

             

            </Box>
            <Box display="flex" justifyContent="end" mt="20px" mb="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};




export default Addproduct;