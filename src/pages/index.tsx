import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from '../components/NextJsImage'
import { useState } from 'react'
import PhotoAlbum from "react-photo-album";
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

  return (
    <>
      <Header></Header>
      <main className='w-11/12 mx-auto'>
        <div className='blue-section'>
          <div>
            <PhotoAlbum layout='masonry' photos={blueSlides} renderPhoto={NextJsImage} columns={(containerWidth) => {
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
            <PhotoAlbum layout='masonry' photos={greenSlides} renderPhoto={NextJsImage} columns={(containerWidth) => {
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
            <PhotoAlbum layout='masonry' photos={pastelSlides} renderPhoto={NextJsImage} columns={(containerWidth) => {
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
            <PhotoAlbum layout='masonry' photos={whiteSlides} renderPhoto={NextJsImage} columns={(containerWidth) => {
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
            <PhotoAlbum layout='masonry' photos={bnwSlides} renderPhoto={NextJsImage} columns={(containerWidth) => {
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
