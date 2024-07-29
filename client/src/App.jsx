import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import Topbar from "./components/top-bar/Topbar";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Catalog from "./components/products/catalog/Catalog";
import Footer from "./components/footer/Footer";
import ProductDetails from "./components/products/product-details/ProductDetails";
import About from "./components/home/about/About";
import Register from "./components/register/Register";
import SideCatalog from "./components/products/side-catalog/SideCatalog";
import Loader from "./components/loader/Loader";



function App() {
  return (
    <>
      <AuthProvider>
       
          <Topbar />
          <Navigation />
          <Routes>
            <Route path={"/loader"} element={<Loader />} />
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/side"} element={<SideCatalog />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/catalog"} element={<Catalog />} />
            <Route path={"/catalog/:flavorId"} element={<ProductDetails />} />
          </Routes>

          <Footer />
        
      </AuthProvider>
    </>
  );
}

export default App;
