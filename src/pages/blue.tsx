import Image from "next/image";
import { useState } from 'react'
import PhotoAlbum, { RenderPhotoProps } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import blueImages from '../data/blue'
import Header from './header';
import Footer from './footer';
export default function Blue() {
    const [indexImages, setIndexImages] = useState(-1);

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
            <div>
                <div className='w-11/12 mx-auto mb-8'>
                    <PhotoAlbum layout='masonry' photos={blueImages} renderPhoto={renderNextJsImage} columns={(containerWidth) => {
                        if (containerWidth < 550) return 2;
                        return 3;
                    }} onClick={({ index: current }) => setIndexImages(current)} />
                    <Lightbox
                        index={indexImages}
                        slides={blueImages}
                        open={indexImages >= 0}
                        close={() => setIndexImages(-1)}
                    />
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
