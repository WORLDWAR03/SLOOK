import {createTheme} from '@mui/material/styles';
export const shades ={
    primary: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
    },
    secondary: {
        100: "#fdfdfd",
        200: "#fbfbfb",
        300: "#fafafa",
        400: "#f8f8f8",
        500: "#f6f6f6",
        600: "#c5c5c5",
        700: "#949494",
        800: "#626262",
        900: "#313131"
    },
    
    nutral: {
        100: "#f9f9f9",
        200: "#f4f4f4",
        300: "#eeeeee",
        400: "#e9e9e9",
        500: "#e3e3e3",
        600: "#b6b6b6",
        700: "#888888",
        800: "#5b5b5b",
        900: "#2d2d2d"
    }
}

export const theme = createTheme({
    palette:{
        main:shades.primary[500]
    },
    secondary:{
        main:shades.secondary[500]
    },
    nutral:{
        dark: shades.nutral[700],
        main: shades.nutral[500],
        light: shades.nutral[100]
    },
  typography:{
    fontFamily:[ 'Raleway', 'Arial'].join(","),
    fontSize: 11,
    h1:{
        fontFamily:[ 'Raleway', 'Arial'].join(","),
        fontSize:48,
    },
    h2:{
        fontFamily:[ 'Raleway', 'Arial'].join(","),
        fontSize:36,
    },
    h3:{
        fontFamily:[ 'Raleway', 'Arial'].join(","),
        fontSize:20,
    },
    h4:{
        fontFamily:[ 'Raleway', 'Arial'].join(","),
        fontSize:14,
    }
  }


})


