import { Rating } from 'react-simple-star-rating'
import { useEffect, useState } from 'react/cjs/react.development';


export default function RatingStars ({ratingvalue, id}) {

    const [rating, setRating] = useState(ratingvalue);

    const handleRating = (rate) => {
        setRating(rate);

        console.log(`Rated: ${rate}`)
    }

    useEffect(() => {
        fetch(`https://lindagiorgadze.github.io/FakeServer/products.json/${id}`, {
            method: 'POST',
            mode: 'no-cors',
            body:JSON.stringify({review: rating})
        })
    }, [rating]);

    return (
        <Rating 
            onClick={handleRating}
            ratingValue={rating}
        />


    )
}