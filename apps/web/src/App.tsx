import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Products/ProductsPage";
import BrandsPage from "./pages/Brands/BrandsPage";
import ContactPage from "./pages/Contact/ContactPage";
import OffersPage from "./pages/Offers/OffersPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
   <Routes> 
      <Route path = "/" element = {<MainLayout/>}>
        <Route index element = {<HomePage/>} />
        <Route path = "products" element = {<ProductsPage/>} /> 
        <Route path = "brands" element = {<BrandsPage/>} /> 
        <Route path = "contact" element = {<ContactPage/>} /> 
        <Route path = "offers" element = {<OffersPage/>} /> 
        <Route path="*" element = {<NotFoundPage/>} />
      </Route> 
    </Routes>
  );
}

export default App;