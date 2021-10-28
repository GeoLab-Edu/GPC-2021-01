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
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: require('./i18n/en.json')
      },
      ka: {
        translation: require('./i18n/ka.json')
      }
    },
    lng: "ka", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });




function App() {
  const { t } = useTranslation();

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
