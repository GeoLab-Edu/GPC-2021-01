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





function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Container/>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
