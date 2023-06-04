import AuthContextProvider from "./context/AuthContext";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import Registre from "../views/Registre/Registre";
import Categories from "../views/Categories/Categories";
import DetailsCategories from "../views/Categories/DetailsCategories";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoute from "./routes/PrivateRoutes";
import "./App.css";

import ProductContextProvider from "./context/ProductContext";

const allowedRoles = { admin: 0, user: 1 };

function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
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
              {/* </Route> */}
            </Routes>
          </BrowserRouter>
        </div>
        </ThemeProvider>
        </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;
