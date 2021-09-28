import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

export default function() {
    const [productData, setProductData] = useState([]);
    const [filteredSubcategory, setFilteredSubCategory] = useState(productData);

    useEffect(() => {
        axios.get('https://lindagiorgadze.github.io/FakeServer/products.json')
            .then(response => {
                setProductData(response.data.Products);
                setFilteredSubCategory(response.data.Products);
            })
    }, []);

    const uniqueProduct = [...new Set(productData.map(item => item.Category))];

    return (
        <div className='MiniNav Pharmacies'>
            <div className='MainSection'>
                <h3 className='MiniNavTitle'>ძებნა</h3>
                <ul className='ProductList'>
                    {
                        uniqueProduct
                            .map(el => {
                                return (
                                    <li key={el} className='ProductLi'>
                                        <Link
                                            to={`/Production/${el.Category}`}
                                        >
                                        {el}
                                           <ul className='ProductListInner'>
                                            {   
                                                filteredSubcategory
                                                .filter((product) => product.Category === el)
                                                .map( element => (
                                                    <li key={element.id}>
                                                    <Link to={`/Production/${element.Category}/${element.subCategory}`}>
                                                        {element.subCategory}
                                                    </Link>
                                                </li>
                                                ))
                                            }
                                            </ul>
                                        </Link>
                                    </li>
                                )
                            })
                    }
                </ul>
            </div>

        </div>
    )
}