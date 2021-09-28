import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";

export default function ProductInnerPage() {

    let {productId} = useParams();

    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://lindagiorgadze.github.io/FakeServer/products.json');
        const itemsData = await data.json();
        console.log(itemsData.Products);
        setItems(itemsData.Products);
    }

    console.log(items)


    return (
        <div className='ProductInnerPage'>
            {
                items
                    .filter((item) => item.id === productId )
                    .map((item, index) => (
                        <h2 key={index}> {item.title}</h2>
                    ))
            }
        </div>

    )

}