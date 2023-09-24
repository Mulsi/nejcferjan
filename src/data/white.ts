import { photo } from '@/photo'
import white1 from '../../public/images/WHITE/_K4I3618.jpg'
import white2 from '../../public/images/WHITE/_K4I4018.jpg'
import white3 from '../../public/images/WHITE/_K4I8407c2.jpg'
import white4 from '../../public/images/WHITE/DJI_0956.jpg'
import white5 from '../../public/images/WHITE/summit.jpg'


const images: photo[] = [

    {
        src: white1.src,
        width: 1920,
        height: 1306,
        alt: 'Naj Mekinc',
    },
    {
        src: white2.src,
        width: 1536,
        height: 1920,
        alt: 'Naj Mekinc',
    },
    {
        src: white3.src,
        width: 1920,
        height: 1171,
        alt: 'Powder',
    },
    {
        src: white4.src,
        width: 1920,
        height: 1920,
        alt: 'Jani Taler',
    },
    {
        src: white5.src,
        width: 1920,
        height: 1280,
        alt: 'Summit',
    },
];

const allImages = images.map((photo) => {
    return {
        src: photo.src,
        width: photo.width,
        height: photo.height,
        alt: photo.alt,
    }
})

export default allImages;