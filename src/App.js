import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import Register from "./Pages/Register";
import { GlobalContextProvider } from "./Contexts/GlobalContext";
import Carts from "./Pages/Carts";
import PrivateRoute from "./Components/PrivateRoute";
import DataProductAPI from "./Pages/DataProductAPI";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalContextProvider>
          <Navbar />

          {/* content */}
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/DataProductAPI" element={<DataProductAPI />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/carts" element={<Carts />} />
            </Route>
          </Routes>

          {/* end content */}
        </GlobalContextProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
