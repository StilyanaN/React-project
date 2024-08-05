
import  { useState } from 'react';
import Carousel from './carousel/Carousel';
import About from './about/About';
import Promotion from './promotion/Promotion';
import VideoModal from './video-modal/VideoModal';
import Portfolio from './portfolio/Portfolio';
import Products from './products-carousel/ProductsCarousel';
import Team from './team/Team';

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const handleOpenModal = (url) => {
    setVideoSrc(url);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Carousel />
      <About />
      <Promotion onOpenModal={handleOpenModal} />
      <VideoModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        videoSrc={videoSrc}
      />
      <Portfolio />
      <Products />
      <Team />
    </>
  );
}
