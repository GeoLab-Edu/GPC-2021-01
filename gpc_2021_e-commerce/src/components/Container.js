import {
    // BrowserRouter as Router,
    // Switch,
    Route,
    // Link
  } from "react-router-dom";
import ProfileSection from "./container/CabinetSection";
import Homepage from "./container/Homepage";
import ProductInnerPage from "./container/ProductInnerPage";
import Production from "./container/Production";

export default function Container() {

    return (
        <div className='mainContainer'>
            <Route path='/' exact component={Homepage}/>
            <Production/>
            <Route path='/Production/:productId' exact component={ProductInnerPage}/>
            <Route path='/Profile' component={ProfileSection} />
  
        </div>
    )
}