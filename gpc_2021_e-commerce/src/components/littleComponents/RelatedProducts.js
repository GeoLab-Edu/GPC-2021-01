import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import GlobalURL from '../../GlobalURL';
import './../../styles/RelatedProducts.css';

export default function RelatedProducts({id}) {
    const [items, setItems] = useState([]);
    // const [relatedProducts, setRelatedProducts] = useState([]);
    const fetchItems = async () => {
        const data = await fetch(GlobalURL);
        const itemsData = await data.json();
        setItems(itemsData.Products);
    };
    useEffect(() => {
        fetchItems();
    }, []);

    var parameter;
    items.forEach(element => {
        if (element.id === id) {
            parameter = element.Category;
        }
    });

    return (
        <section className='relatedProductsSection'>
            <h3 className='RelatedProductsTitle' >შეიძლება დაგაინტერესოთ</h3>
            <div className='relatedProductsDiv'>
                {
                    parameter === undefined
                    ?
                    items
                        .map (product => {
                            return (
                                <div className='RelatedProductsBox' key={product.id}>
                                    <Link to={`/Production/${product.id}`}>
                                        <img className='relatedImage' src={product.img} />
                                        <div className='RelatedProductDetails'>
                                            <h2>{product.title}</h2>
                                            <span>{product.price} ლარი</span>
                                        </div>
                                    </Link>
                                </div>                                
                            )

                        })
                    :                   
                    items
                        .filter((item) => item.Category === parameter )
                        .map (product => {
                            return (
                                <div className='RelatedProductsBox' key={product.id}>
                                    <Link to={`/Production/${product.id}`}>
                                        <img className='relatedImage' src={product.img} />
                                        <div className='RelatedProductDetails'>
                                            <h2>{product.title}</h2>
                                            <span>{product.price} ლარი</span>
                                        </div>
                                    </Link>
                                </div>                                
                            )

                        })
                }
            </div>
        </section>
    )
}