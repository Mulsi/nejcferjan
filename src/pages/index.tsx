import Header from './header'
import Footer from './footer'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useEffect, useState } from 'react'
import PhotoAlbum, { RenderPhotoProps } from "react-photo-album";
import Image from "next/image";
import allImages from '@/data/images'

export default function Home() {
  const [indexImages, setIndexImages] = useState(-1);
  const [loadedImages, setLoadedImages] = useState([]);
  const imagesPerLoad = 20;
  const [firstImageBatchLoaded, setFirstImageBatchLoaded] = useState(false);
  const [secondImageBatchLoaded, setSecondImageBatchLoaded] = useState(false);
  const [thirdImageBatchLoaded, setThirdImageBatchLoaded] = useState(false);
  const [fourthImageBatchLoaded, setFourthImageBatchLoaded] = useState(false);

  useEffect(() => {
    const imgs: any = allImages.slice(0, imagesPerLoad);
    setLoadedImages(imgs);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadedImages]);

  const handleScroll = () => {
    const percentageScrolled = (window.scrollY / document.body.offsetHeight) * 100;    

    if (
      percentageScrolled >= 5 && percentageScrolled < 20 && !firstImageBatchLoaded
    ) {
      // Prvotno je naloženih 20 slik, ko pride čez 5% celotne višine trenutnga scrolla -> naloži nove
        const firstImgs: any = allImages.slice(
          loadedImages.length,
          loadedImages.length + imagesPerLoad
        );
        const firsConcImgs: any = [...loadedImages, ...firstImgs]
        setLoadedImages(firsConcImgs);
        setFirstImageBatchLoaded(true)
    } 
    if (percentageScrolled >= 20 && percentageScrolled < 50 && !secondImageBatchLoaded) {
      const secondConcatImgs: any = allImages.slice(
        loadedImages.length,
        loadedImages.length + imagesPerLoad
      );
      const concImgs: any = [...loadedImages, ...secondConcatImgs]  
      setLoadedImages(concImgs);
      setSecondImageBatchLoaded(true)       
    }
    if (percentageScrolled >= 50 && percentageScrolled < 80 && !thirdImageBatchLoaded) {
      const thirdConcatImgs: any = allImages.slice(
        loadedImages.length,
        loadedImages.length + imagesPerLoad
      );
      const concImgs: any = [...loadedImages, ...thirdConcatImgs]  
      setLoadedImages(concImgs);
      setThirdImageBatchLoaded(true)       
    }
    if (percentageScrolled >= 80 && !fourthImageBatchLoaded) {
      const thirdConcatImgs: any = allImages.slice(
        loadedImages.length,
        loadedImages.length + imagesPerLoad
      );
      const concImgs: any = [...loadedImages, ...thirdConcatImgs]  
      setLoadedImages(concImgs);
      setFourthImageBatchLoaded(true)       
    }

  }

  const renderNextJsImage = ({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
  }: RenderPhotoProps) => (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image src={photo} {...{ alt, title, sizes, className, onClick }} />
    </div>
  );

  return (
    <>
      <Header></Header>
      <main className='w-11/12 mx-auto'>
        <div className='blue-section-first'>
          <div>
            <PhotoAlbum layout='masonry' photos={loadedImages} renderPhoto={renderNextJsImage} columns={(containerWidth) => {
              if (containerWidth < 550) return 2;
              return 3;
            }} onClick={({ index: current }) => setIndexImages(current)} />
            <Lightbox
              index={indexImages}
              slides={loadedImages}
              open={indexImages >= 0}
              close={() => setIndexImages(-1)}
            />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
