import Header from './header'
import Footer from './footer'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from 'react'
// import { useCallCount } from '../contexts/CallCountContext';
import PhotoAlbum, { RenderPhotoProps } from "react-photo-album";
import Image from "next/image";
import blueSlides from '@/data/blueSlides'
import greenSlides from '@/data/greenSlides';
import pastelSlides from '@/data/pastelSlides';
import whiteSlides from '@/data/whiteSlides';
import bnwSlides from '@/data/BnwSlides';

export default function Home() {
  const [indexBlue, setIndexBlue] = useState(-1);
  const [indexGreen, setIndexGreen] = useState(-1);
  const [indexPastel, setIndexPastel] = useState(-1);
  const [indexWhite, setIndexWhite] = useState(-1);
  const [indexBnw, setIndexBnw] = useState(-1);
  // const { callCount, setCallCount } = useCallCount();

  // Load callCount from local storage on initial render
  // useEffect(() => {
  //   const storedCallCount = sessionStorage.getItem('callCount');
  //   if (storedCallCount) {
  //     setCallCount(Number(storedCallCount));
  //   }
  // }, [])

  // Update callCount in local storage whenever it changes
  // useEffect(() => {
  //   sessionStorage.setItem('callCount', callCount.toString());
  // }, [callCount]);

  // function setNextSectionVisible() {
  //   setCallCount(callCount + 1);
  // }

  const renderNextJsImage = ({
    photo,
    imageProps: { alt, title, sizes, className, onClick },
    wrapperStyle,
  }: RenderPhotoProps) => (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image src={photo} priority {...{ alt, title, sizes, className, onClick }} />
    </div>
  );

  return (
    <>
      <Header></Header>
      <main className='w-11/12 mx-auto'>
        <div className='blue-section-first'>
          <div>
            <PhotoAlbum layout='masonry' photos={blueSlides} renderPhoto={renderNextJsImage} columns={(containerWidth) => {
              if (containerWidth < 550) return 2;
              return 3;
            }} onClick={({ index: current }) => setIndexBlue(current)} />
            <Lightbox
              index={indexBlue}
              slides={blueSlides}
              open={indexBlue >= 0}
              close={() => setIndexBlue(-1)}
            />

          </div>
        </div>

          <div className='green-section'>
            <div className='mt-[15px]'>
              <PhotoAlbum layout='masonry' photos={greenSlides} renderPhoto={renderNextJsImage} columns={(containerWidth) => {
                if (containerWidth < 550) return 2;
                return 3;
              }} onClick={({ index: current }) => setIndexGreen(current)} />
              <Lightbox
                index={indexGreen}
                slides={greenSlides}
                open={indexGreen >= 0}
                close={() => setIndexGreen(-1)}
              />
            </div>
          </div>

        <div className='pastel-section'>
          <div className='mt-[15px]'>
            <PhotoAlbum layout='masonry' photos={pastelSlides} renderPhoto={renderNextJsImage} columns={(containerWidth) => {
              if (containerWidth < 550) return 2;
              return 3;
            }} onClick={({ index: current }) => setIndexPastel(current)} />
            <Lightbox
              index={indexPastel}
              slides={pastelSlides}
              open={indexPastel >= 0}
              close={() => setIndexPastel(-1)}
            />
          </div>
        </div>
        
        <div className='white-section'>
          <div className='mt-[15px]'>
            <PhotoAlbum layout='masonry' photos={whiteSlides} renderPhoto={renderNextJsImage} columns={(containerWidth) => {
              if (containerWidth < 550) return 2;
              return 3;
            }} onClick={({ index: current }) => setIndexWhite(current)} />
            <Lightbox
              index={indexWhite}
              slides={whiteSlides}
              open={indexWhite >= 0}
              close={() => setIndexWhite(-1)}
            />
          </div>
        </div>

        <div className='bnw-section'>
          <div className='mt-[15px]'>
            <PhotoAlbum layout='masonry' photos={bnwSlides} renderPhoto={renderNextJsImage} columns={(containerWidth) => {
              if (containerWidth < 550) return 2;
              return 3;
            }} onClick={({ index: current }) => setIndexBnw(current)} />
            <Lightbox
              index={indexBnw}
              slides={bnwSlides}
              open={indexBnw >= 0}
              close={() => setIndexBnw(-1)}
            />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
