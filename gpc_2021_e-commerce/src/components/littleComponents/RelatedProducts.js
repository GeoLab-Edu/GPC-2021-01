import { useEffect, useState } from 'react/cjs/react.development';
import './RelatedProducts.css';

export default function RelatedProducts({id}) {
    const [items, setItems] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('https://lindagiorgadze.github.io/FakeServer/products.json');
        const itemsData = await data.json();
        console.log(itemsData.Products);
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
    console.log(parameter)

    return (
        <section className='relatedProductsSection'>
            <h3>შეიძლება დაგაინტერესოთ</h3>
            <div className='relatedProductsDiv'>
                {
                    items
                        .filter((item) => item.Category === parameter )
                        .map (product => {
                            return (
                                <div key={product.id}>
                                    <img className='relatedImage' src={product.img} />
                                    <h2>{product.title}</h2>
                                    <span>{product.price}</span>
                                </div>                                
                            )

                        })
                }
            </div>
        </section>
    )
}