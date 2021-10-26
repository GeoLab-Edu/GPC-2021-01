import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  // Route,
  // Link
} from "react-router-dom";
//** Icons */
import './fontAwesome';
//** CSS */
import './reset.css';
import 'react-input-range/lib/css/index.css';
import './App.css';
//** Components */
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react/cjs/react.development';
import CartContext, {ProductQuantity} from './CartContext';





function App() {

  const [cartProducts, setCartProducts] = useState([]);
  const [cartProductQuantity, setCartProductQuantity] = useState(1);

  return (
    <Router>
      <div className="App">
        <CartContext.Provider value={{
          cartProducts,
          setCartProducts
        }}
        >
          <ProductQuantity.Provider value={{
            cartProductQuantity,
            setCartProductQuantity
          }}
          >
            <Header/>
            <Switch>
              <Container/>
            </Switch>

            <Footer/>
          </ProductQuantity.Provider>
        </CartContext.Provider>
      </div>
    </Router>
  );
}

export default App;
