import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./contexts/authContext";
import { CartProvider } from "./contexts/cartContext";
import Topbar from "./components/top-bar/Topbar";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Catalog from "./components/products/catalog/Catalog";
import Footer from "./components/footer/Footer";
import ProductDetails from "./components/products/product-details/ProductDetails";
import About from "./components/home/about/About";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import Cart from "./components/shopping-cart/Cart";
import Checkout from "./components/shopping-cart/checkout/Checkout";
import CreteProduct from "./components/admin/create-product/CreateProduct";
import EditProduct from "./components/admin/edit-product/EditProduct";
import AuthGuard from "./components/guards/AuthGuard";
import AdminGuard from "./components/guards/AdminGuard"
import OrderHistory from "./components/orders/Order";
import NotFound from "./components/not-found/NotFound";


function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Topbar />
          <Navigation />
          <Routes>
        
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/catalog"} element={<Catalog />} />
            <Route path={"/catalog/:flavorId"} element={<ProductDetails />} />
            <Route element={<AuthGuard />}>
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/profile/orders"} element={<OrderHistory />} />
            <Route path={"/logout"} element={<Logout />} />
            <Route path="/*" element={<NotFound />} />
            </Route>
            <Route element={<AdminGuard/>}> 
            <Route path={"/create"} element={<CreteProduct />} />
            <Route path={"/catalog/:flavorId/edit"} element={<EditProduct />} />
            </Route>
          </Routes>

          <Footer />
          <ToastContainer />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
