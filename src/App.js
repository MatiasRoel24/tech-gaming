import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";


import './index.css';
import "./components/Navbar/Navbar.css";
import "./components/Footer/Footer.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <BrowserRouter>
      {/* <CartContextProvider> */}
        <div className="App">
          <Navbar />

          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route
              path="/detalle/:detailId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Navigate to="/" replace />} /> */}
          </Routes>
        </div>
      {/* </CartContextProvider> */}
          <Footer />
    </BrowserRouter>
  );
}

export default App;
