import {
    // BrowserRouter as Router,
    // Switch,
    Route,
    // Link
  } from "react-router-dom";
import ProfileSection from "./container/CabinetSection";
import CartPage from "./container/CartPage";
import Homepage from "./container/Homepage";
import ProductInnerPage from "./container/ProductInnerPage";
import Production from "./container/Production";
import Purchase from "./container/Purchase";
// import Products from "./container/Products";
// import ProductionPreview from "./littleComponents/ProductionPreview";

export default function Container() {

    return (
        <div className='mainContainer'>
            <Route path='/' exact component={Homepage}/>
            <Route path='/Production' exact component={Production}/>
            <Route path='/Production/:productId' exact component={ProductInnerPage}/>
            <Route path='/Cart' exact component={CartPage}/>
            <Route path='/Purchase' exact component={Purchase}/>
            <Route path='/Profile' component={ProfileSection} />
  
        </div>
    )
}