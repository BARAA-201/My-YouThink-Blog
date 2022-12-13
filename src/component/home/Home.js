import useEmblaCarousel from 'embla-carousel-react' // npm install embla-carousel-react --save
import slider1 from '../../photo/slider1.png'
import slider2 from '../../photo/slider2.jpg'
import './Home.css'

function Home ()  {
    const [emblaRef] = useEmblaCarousel()
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <img className='slider__img' src={slider1}  alt={'page-cover'} />    
                </div>
                <div className="embla__slide">
                    <img className='slider__img'  src={slider2} alt={'page-cover'} />    
                </div>
            </div>
        </div>
    )
}

export default Home;