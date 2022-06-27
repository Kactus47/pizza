import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Cart from "./Components/Cart";
import './assets/scss/app.scss';
import { Routes, Route } from "react-router-dom";

export const SerachContext = React.createContext('');

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  
  return (
    <div className="wrapper">
      <SerachContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cart.html' element={<Cart />} />
          </Routes>
        </div>
      </SerachContext.Provider>
    </div>
  );
}

export default App;
