import { useState } from 'react'
import Image from "next/image";
import PhotoAlbum, { RenderPhotoProps } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import pastelImages from '../data/pastel'
import Header from './header';
import Footer from './footer';
export default function Pastel() {
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
                    <PhotoAlbum layout='masonry' photos={pastelImages} renderPhoto={renderNextJsImage} columns={(containerWidth) => {
                        if (containerWidth < 550) return 2;
                        return 3;
                    }} onClick={({ index: current }) => setIndexImages(current)} />
                    <Lightbox
                        index={indexImages}
                        slides={pastelImages}
                        open={indexImages >= 0}
                        close={() => setIndexImages(-1)}
                    />
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
