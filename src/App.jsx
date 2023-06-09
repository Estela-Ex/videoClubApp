import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/styles";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import Registre from "../views/Registre/Registre";
import Categories from "../views/Categories/Categories";
import DetailsCategories from "../views/Categories/DetailsCategories";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoute from "./routes/PrivateRoutes";
import "./App.css";

import ProductContextProvider from "./context/ProductContext";
import Search from "../views/Search/Search";
import CartContextProvider from "./context/CartContext";
import Cart from "../views/Cart/Cart";

const allowedRoles = { admin: 0, user: 1 };

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <CartContextProvider>
            <ProductContextProvider>
              <div className="App">
                <Routes>
                  {/* <Route element={<PublicRoutes />}> */}
                  <Route path="/" element={<Home />} />
                  {/* </Route> */}
                  {/* <Route element={<PrivateRoute allowedRoles={[allowedRoles.user]} />}> */}
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Registre" element={<Registre />} />
                  <Route path="/Categories" element={<Categories />} />
                  <Route
                    path="/DetailsCategories/:categoria"
                    element={<DetailsCategories />}
                  />
                  <Route path="/Cart" element={<Cart/>}/>
                  <Route path="/search/:pelicula" element={<Search />} />
                  {/* </Route> */}
                </Routes>
              </div>
            </ProductContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
