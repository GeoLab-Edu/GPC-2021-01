
import { useState, useRef, useEffect } from "react/cjs/react.development";
import Button from './Button'

const images = [
    'https://bfm.ge/wp-content/uploads/2016/03/news_113.jpg',
    'https://www.graficool.com/sites/default/files/reference/mp_01_590x250.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
];

export default function CarouselMini () {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const delay = 4000;

    function resetTimeout () {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout ();
        timeoutRef.current = setTimeout (
            () =>
            setIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex +1
            ),
            delay
        );
        return () => {
            resetTimeout();
        }
    }, [index])

    return (
        <div className="CarouselMini">
            <div
                className="slideshowSliderMini"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="slideMini">
                        <img
                            key={index}
                            src={src}
                            alt={index}
                        />
                        <Button customClass='offerBtn' content='შეთავაზება'/>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {images.map((_, idx) => (
                <span
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                    setIndex(idx);
                    }}
                >
                </span>
                ))}
            </div>
        </div>
    )
}