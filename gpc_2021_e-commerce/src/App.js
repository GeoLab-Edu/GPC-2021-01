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
import { useState, useMemo } from 'react/cjs/react.development';
import CartContext, {ProductQuantity} from './CartContext';
import LogInContext from './LogInContext';






function App() {

  const [cartProducts, setCartProducts] = useState([]);
  const memorizedValue = useMemo(() => ({
    cartProducts, setCartProducts
  }), [cartProducts]);

  const [logedIn, setLogedIn] = useState(true);

  return (
    <Router>
      <div className="App">
        <CartContext.Provider value={
          memorizedValue
        }
        >
          <LogInContext.Provider value= {{
            logedIn,
            setLogedIn
          }}>
            <Header/>
            <Switch>
              <Container/>
            </Switch>

            <Footer/>
          </LogInContext.Provider>
        </CartContext.Provider>
      </div>
    </Router>
  );
}

export default App;
