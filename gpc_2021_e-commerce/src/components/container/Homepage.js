import Articles from "../littleComponents/Articles"
import CarouselComponent from "../littleComponents/CarouselComponent"
import ProductionPreview from "../littleComponents/ProductionPreview"
import PromotionSection from "../littleComponents/PromotionSection"



export default function Homepage() {

    return (
        <div className='Homepage' >
            <CarouselComponent/>
            <ProductionPreview/>
            <PromotionSection/>
            <Articles/>
        </div>
    )
}