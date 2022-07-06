import React from "react";
import Main from "./Components/Main";
import Cart from "./Components/Cart";
import MainLayout from "./layout/MainLayout";
import PrizzaFullPage from "./Components/PizzaFullPage";
import './assets/scss/app.scss';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='' element={<Main />} />
        <Route path='pizza/:id' element={<PrizzaFullPage />} />
        <Route path='cart.html' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
