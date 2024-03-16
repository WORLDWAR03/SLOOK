
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createTheme } from '@mui/material/styles';
import { TextField, Checkbox, Button, Container, Typography, Link } from '@mui/material';
import { shades } from '../theme';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  birthdate: Yup.date().required('Birthdate is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  country: Yup.string().required('Country/Region is required'),
});


const theme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '0000',
      contrastText: '#242105',
    },
  },
});




const UserRegistration = ({setBoxName}) => {

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (

    <div className="login-container">
        <h1 className="login-title">Login</h1>
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        CREATE A PROFILE
      </Typography>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          birthdate: '',
          email: '',
          password: '',
          country: '',
          agreeToTerms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
          <Form className={''}>
            <Field name="firstName" as={TextField} label="First Name" fullWidth margin="normal" />
            <ErrorMessage name="firstName" component="div" />
            <Field name="lastName" as={TextField} label="Last Name" fullWidth margin="normal" />
            <ErrorMessage name="lastName" component="div" />
            <Field name="birthdate" as={TextField} label="" fullWidth margin="normal" type="date" />
            <ErrorMessage name="birthdate" component="div" />
            <Field name="email" as={TextField} label="Email" fullWidth margin="normal" type="email" />
            <ErrorMessage name="email" component="div" />
            <Field name="password" as={TextField} label="Password" fullWidth margin="normal" type="password" />
            <ErrorMessage name="password" component="div" />
            <Field name="country" as={TextField} label="Country/Region of residence" fullWidth margin="normal" />
            <ErrorMessage name="country" component="div" />
            <Field name="agreeToTerms" as={Checkbox} label="I have read and understood the privacy policy and I agree to the Terms of use." />
            <ErrorMessage name="agreeToTerms" component="div" />
            <Button variant="contained" color={theme.dark} backgroundColor={theme.dark} fullWidth type="submit" disabled={isSubmitting}
              sx={{
                "backgroundColor":"black",
                "color":"white",
                '&:hover':{
                    backgroundColor:"#3f3f3f"
                },
                "marginTop":"50px"
            }}>
              CREATE A PROFILE
            </Button>
      
    <div
    style={{
      
      margin:" auto auto ",
      alignItems:"center",
      maxWidth: "300px",
      marginTop: "20px",
      fontWeight: "bold",
      textAlign:"center",
      cursor:"pointer"
      
    }}
    >
            
      <Link
      color={shades.primary[500]}
      letterSpacing="1px"
      onClick={()=>setBoxName('login')}
      >
       Already have an account ? Log in!

      </Link>

      </div>
            
          </Form>
        )}
      </Formik>
    </Container>
    </div>
  );
};

export default UserRegistration;