import Carousel from "./carousel/Carousel"
import About from "./about/About"
import Promotion from "./promotion/Promotion"
import VideoModal from "./video-modal/VideoModal"
import Portfolio from "./portfolio/Portfolio"
import Products from "./products-carousel/ProductsCarousel"
import Team from "./team/Team"

export default function Home(){

    return(
        <>
        <Carousel />
        <About />
        <Promotion/>
        <VideoModal/>
        <Portfolio />
        <Products />
        <Team />
        </>
    )
}