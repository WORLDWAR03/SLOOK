
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography, Grid, Link } from '@mui/material';
import { shades } from '../theme';
import './Login.css';


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  password: Yup.string()
    .max(255)
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const Login = ({setBoxName}) => {
  return (

    <div className="login-container">
        <h1 className="login-title">Login</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className='form-group'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name="email"
                type="email"
                label="Email Address *"
                fullWidth
                error={errors.email && touched.email}
                helperText={<ErrorMessage name="email" />}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name="password"
                type="password"
                label="Password *"
                fullWidth
                error={errors.password && touched.password}
                helperText={<ErrorMessage 
                    name="password" />}
              />
            </Grid>

            <Grid item xs={12}>
              <Link href="#" variant="body2"
              color={shades.primary[500]}>
                Forgot password?
              </Link>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isSubmitting}
                sx={{
                    "backgroundColor":"black",
                    "color":"white",
                    '&:hover':{
                        backgroundColor:"#3f3f3f"
                    },
                    "marginTop":"50px"
                }}
                
                
              >
                LOGIN
              </Button>
            </Grid>

          </Grid>
        </Form>
      )}
    </Formik>

    <div
    style={{
      
      margin:" auto auto ",
      alignItems:"center",
      maxWidth: "200px",
      marginTop: "20px",
      fontWeight: "bold",
      textAlign:"center",
      cursor:"pointer"
      
    }}
    >

      <Link
      color={shades.primary[500]}
      letterSpacing="1px"
      onClick={()=>setBoxName('signup')}
      >
      Create Profile
      </Link>
    </div>
    </div>
  );
};

export default Login;
