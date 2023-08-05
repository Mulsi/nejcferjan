import { photo } from '@/photo'
import white1 from '../../public/images/WHITE/_K4I3555-6.jpeg'
import white2 from '../../public/images/WHITE/_K4I3618.jpeg'
import white4 from '../../public/images/WHITE/_K4I4018.jpeg'
import white6 from '../../public/images/WHITE/_K4I8407c2.jpg'
import white7 from '../../public/images/WHITE/DJI_0956.jpeg'
import white8 from '../../public/images/WHITE/summit.jpg'

const whiteSection: photo[] = [
    {
        src: white2.src,
        width: 5365,
        height: 3648,
        alt: 'Naj Mekinc',
    },
    {
        src: white4.src,
        width: 2541,
        height: 3176,
        alt: 'Naj Mekinc',
    },
    {
        src: white6.src,
        width: 4300,
        height: 2623,
        alt: 'Powder',
    },
    {
        src: white7.src,
        width: 3210,
        height: 3210,
        alt: 'Frontside boardslide',
    },
    {
        src: white8.src,
        width: 5760,
        height: 3840,
        alt: 'Summit',
    },
];

const whiteSlides = whiteSection.map((photo) => {
    return {
        src: photo.src,
        width: photo.width,
        height: photo.height,
        alt: photo.alt,
    }
})

export default whiteSlides;