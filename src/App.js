import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Cart from "./Components/Cart";
import './assets/scss/app.scss';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart.html' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
