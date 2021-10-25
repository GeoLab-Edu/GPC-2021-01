import { useState, useEffect } from "react/cjs/react.development";
import Products from "./Products";
import PricingSlider from '../littleComponents/PricingSlider';
import GlobalURL from './../../GlobalURL';

export default function Production() {

    const[error, setError]=useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const[prodData, setProdData]=useState([]);

    const [filterValue, setFilterValue] = useState();
    
    useEffect (() => {
        fetch(GlobalURL)
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProdData(result.Products);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    });
    const uniqueBrands = [...new Set(prodData.map(item => item.manufacturer))]

    useEffect(() => {
        setFilterValue(uniqueBrands);
    }, [prodData]);

    function checked(e) {
        if (e.target.checked) {
            setFilterValue(e.target.id)
        } if(!e.target.checked) {
            setFilterValue(uniqueBrands.filter(brand => brand !== e.target.id))
        }
    }    


    if(error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className='Production'>
                <form className='FilterForm'>
                    <fieldset>
                        <h3>ფილტრი:</h3>
                        <label>
                            <input type='checkbox' />
                            პოპულარული
                        </label>
                        <label>
                            <input type='checkbox' />
                            ახალი
                        </label>
                        <label>
                            <input type='checkbox' />
                            ტოპ შეფასება
                        </label>
                    </fieldset>
                    <fieldset>
                        <h3 className='testTitle'>ბრენდი:</h3>
                        {
                            uniqueBrands.map(brand => {
                                return (
                                    
                                    <label key={brand}  >
                                        <input 
                                            type='checkbox' 
                                            id={brand} 
                                            onChange={checked}
                                        />
                                        {brand}
                                    </label>
                                )
                            })
                        }
                    </fieldset>
                    <fieldset className='formLastField'>
                        <h3>ფასი</h3>
                        <PricingSlider />
                        <h3 className='testTitle'>პროდუქტის სახე</h3>
                        <label >
                            <input type='checkbox'
                            />
                            პლასტიკის ბოთლი
                        </label>
                        <label >
                            <input type='checkbox'
                            />
                            შუშის ბოთლი
                        </label>
                    </fieldset>
                    <button className='resetBtn' type='reset'>ფილტრის განახლება</button>
                </form>

                <Products filtersValue={filterValue}/>
            </div>
        )
    }
}