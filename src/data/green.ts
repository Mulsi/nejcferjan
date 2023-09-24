import { photo } from '@/photo'

import green1 from '../../public/images/GREEN/_C6B4440.jpg'
import green2 from '../../public/images/GREEN/_C6B4497-3.jpg'
import green3 from '../../public/images/GREEN/_C6B8719.jpg'
import green4 from '../../public/images/GREEN/_C6B8812.jpg'
import green5 from '../../public/images/GREEN/_I7A0216last.jpg'
import green6 from '../../public/images/GREEN/_O1I4491.jpg'
import green7 from '../../public/images/GREEN/BinePerniki1.jpg'
import green8 from '../../public/images/GREEN/BinePortret.jpg'
import green9 from '../../public/images/GREEN/NF_20210609_BMXMaze_5688.jpg'
import green10 from '../../public/images/GREEN/NF_20210610_BMXMaze_5986.jpg'
import green11 from '../../public/images/GREEN/NF_20210610_BMXMaze_6010.jpg'
import green12 from '../../public/images/GREEN/NF_20210610_MXMaze_5922.jpg'


const images: photo[] = [
    {
        src: green1.src,
        width: 1920,
        height: 1200,
        alt: 'Downhill',
    },
    {
        src: green2.src,
        width: 1920,
        height: 1264,
        alt: 'Road',
    },
    {
        src: green5.src,
        width: 1920,
        height: 1261,
        alt: 'Woods',
    },
    {
        src: green3.src,
        width: 1920,
        height: 1268,
        alt: 'Luka Kovačič',
    },
    {
        src: green6.src,
        width: 1920,
        height: 1280,
        alt: 'Mountains',
    },
    {
        src: green4.src,
        width: 1920,
        height: 1326,
        alt: 'Mountain runner',
    },
    {
        src: green7.src,
        width: 1920,
        height: 1200,
        alt: 'Downhill',
    },
    {
        src: green8.src,
        width: 1920,
        height: 1200,
        alt: 'Bine Žalohar',
    },
    {
        src: green9.src,
        width: 1920,
        height: 1395,
        alt: 'BMX',
    },
    {
        src: green10.src,
        width: 1920,
        height: 1347,
        alt: 'Redbull',
    },
    {
        src: green11.src,
        width: 1920,
        height: 1362,
        alt: 'Wallride',
    },
    {
        src: green12.src,
        width: 1920,
        height: 1347,
        alt: 'BMX jump',
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