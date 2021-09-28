import CarouselMini from "./CarouselMini";
import Button from "./Button"

export default function PromotionSection() {
    return (
        <section className='PromotionSection' >
            <CarouselMini/>
            <div className='cardOffer'>
                <img src='https://i.ibb.co/Cn6XVjV/zgarbi-card.png' alt='Card'/>
                <p>დააგროვე ქულები და მიიღე მეტი შემოთავაზებები!</p>
                <Button content='გახსენი ბარათი'/>
            </div>
        </section>
    )
}