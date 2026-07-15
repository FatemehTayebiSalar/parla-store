import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import BrandsPage from "./pages/BrandsPage";
import ContactPage from "./pages/ContactPage";
import OffersPage from "./pages/OffersPage";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
   <Routes> 
      <Route path = "/" element = {<MainLayout/>}>
        <Route index element = {<HomePage/>} />
        <Route path = "/products" element = {<ProductsPage/>} /> 
        <Route path = "/brands" element = {<BrandsPage/>} /> 
        <Route path = "/contact" element = {<ContactPage/>} /> 
        <Route path = "/offers" element = {<OffersPage/>} /> 
      </Route> 
    </Routes>
  );
}

export default App;