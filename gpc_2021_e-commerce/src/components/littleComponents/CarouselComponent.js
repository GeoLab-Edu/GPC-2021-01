
import { useState, useRef, useEffect } from "react/cjs/react.development";
import image from "./../../images/sliderImage1.png";

const images = [
    image,
    'https://www.graficool.com/sites/default/files/reference/mp_01_590x250.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
];

export default function CarouselComponent () {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const delay = 3000;

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
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((src, index) => (
                <img
                    className="slide"
                    key={index}
                    src={src}
                    alt={index}
                />
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