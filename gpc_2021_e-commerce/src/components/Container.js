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
// import Products from "./container/Products";
// import ProductionPreview from "./littleComponents/ProductionPreview";

export default function Container() {

    return (
        <div className='mainContainer'>
            <Route path='/' exact component={Homepage}/>
            <Route path='/Production' exact component={Production}/>
            {/* <Production/> */}
            <Route path='/Production/:productId' exact component={ProductInnerPage}/>
            <Route path='/Profile' component={ProfileSection} />
  
        </div>
    )
}