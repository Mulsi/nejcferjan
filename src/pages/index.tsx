import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from '../components/NextJsImage'

import { useState } from 'react'
import { useRouter } from 'next/router';
import PhotoAlbum from "react-photo-album";
import blueSlides from '@/data/blueSlides'
import greenSlides from '@/data/greenSlides';


export default function Home() {
  const router = useRouter();
  const [indexBlue, setIndexBlue] = useState(-1);
  const [indexGreen, setIndexGreen] = useState(-1);

  return (
    <>
      <Head>
        <title>Nejc Ferjan | Photography</title>
        <meta name="description" content="Explore Nejc Ferjan's photography portfolio. Discover the world through his lens and witness the beauty of life in every frame." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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

      </main>
      <Footer></Footer>
    </>
  )
}
