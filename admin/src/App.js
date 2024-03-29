import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Addproduct from "./scenes/add-product/Addproduct";
import Allproducts from "./scenes/all-products/Allproucts";
import ProductCard from "./scenes/product-card/ProductCard";
import Register from "./scenes/admin-entry/Register";
import Login from "./scenes/admin-entry/Login";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      
        <CssBaseline />
       

        
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
       

        <Routes>
   
              
              <Route path="/" element={<Dashboard />} />
              <Route path="/register" element={<Register/>} />  
              <Route path="/productview/:id" element={<ProductCard/>}/>
              <Route path="/team" element={<Team />} />
              <Route path="/addProduct" element={<Addproduct/>}/>
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/allProduct" element={<Allproducts/>}/>

           
            </Routes>
            </main>
            </div>
         
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
