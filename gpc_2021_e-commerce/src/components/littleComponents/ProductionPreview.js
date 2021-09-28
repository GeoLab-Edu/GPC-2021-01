import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import {Link} from 'react-router-dom';
import BuyButton from './BuyButton';

export default function ProductionPreview() {
    const [products, setProducts] = useState([]);
    const [filterValue, setFilterValue] =useState('new');
    const [active, setActive] = useState('new');
    useEffect(()=> {
        fetch('https://lindagiorgadze.github.io/FakeServer/products.json')
            .then(response => response.json())
            .then(result => {
                setProducts(result.Products);
            })
    },[]);

    const sectionLi = [
        {id: 'new', title: 'ახალი პროდუქცია'},
        {id: 'discountedPrice', title:'ფასდაკლება'},
        {id: 'popular', title:'პოპულარული'},
        {id: 'essential', title:'აუცილებელი'}
    ]

    function clicked(e) {
        setFilterValue(e.target.id)
        setActive(e.target.id)
        console.log(e.target.id)
    } 

    return(
        <section className='ProductionPreview'>
            <h3 className='ProductionPreviewTitle'>პროდუქცია</h3>
            <div className='ProductionPreviewDiv'>
                <ul className='ProductionPreviewUl' >
                    {
                        sectionLi.map((item) => {
                            return <li id={item.id} key={item.id} className={'NewProductsDiv ' + active} onClick={clicked}>{item.title}</li>
                        })
                    }

                </ul>
                <div className='NewProducts'>
                                {
                                    products
                                        .filter(item => item[filterValue] ? (item[filterValue] === true || item[filterValue] > 0) : null)
                                        .slice(0, 4)
                                        .map(item => {
                                            return (
                                                <div key={item.id} className='ProductBox'>
                                                    <Link to={`/Production/${item.id}`}>
                                                        <img src={item.img} alt={item.title}/>
                                                    </Link>
                                                    <div className='ProductPreview'>
                                                        <div className='PreviewTop'>
                                                            <h4>{item.manufacturer}</h4> 
                                                            <span>{item.review}</span>
                                                        </div>
                                                        <h2 className='ProductPreviewTitle'>{item.title}</h2>
                                                        <span className='ProductPreviewAmount'>{item.amount}</span>
                                                        <div className='PreviewBottom'>
                                                            <div className='PreviewPriceDiv'>
                                                                {
                                                                    item.discountedPrice ?
                                                                    <>
                                                                        <span className='PreviewPrice'>{item.discountedPrice} ლ</span>
                                                                        <span className='PreviewOldPrice'>{item.price} ლ</span>
                                                                    </>
                                                                    :
                                                                    <span className='PreviewPrice'>{item.price} ლ</span>
                                                                }
                                                            </div>
                                                            <BuyButton btnClass='btnClass' type='button' content='ყიდვა'/>                                     
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        })
                                }
                            </div>
            </div>
        </section>
    )
}