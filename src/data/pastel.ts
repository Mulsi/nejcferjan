import { photo } from '@/photo'
import pastel1 from '../../public/images/PASTEL/_C6B6513-2.jpg'
import pastel2 from '../../public/images/PASTEL/_C6B7979.jpg'
import pastel3 from '../../public/images/PASTEL/_I7A0163.jpg'
import pastel4 from '../../public/images/PASTEL/_K4I2016.jpg'
import pastel5 from '../../public/images/PASTEL/_K4I5419.jpg'
import pastel6 from '../../public/images/PASTEL/_K4I9449.jpg'
import pastel7 from '../../public/images/PASTEL/local1.jpg'
import pastel8 from '../../public/images/PASTEL/NejcFerjanRBI.jpg'
import pastel9 from '../../public/images/PASTEL/NF_20210609_BMXMaze_0508.jpg'
import pastel10 from '../../public/images/PASTEL/NF_20210612_BMXMaze_7132.jpg'
import pastel11 from '../../public/images/PASTEL/NF_20220816_Skydiving_over_Landshut_7777.jpg'
import pastel12 from '../../public/images/PASTEL/NF_20220817_Skydiving_over_Landshut_7932.jpg'
import pastel13 from '../../public/images/PASTEL/Pavlihanapokljuki.jpg'


const images: photo[] = [
    {
        src: pastel1.src,
        width: 1920,
        height: 1227,
        alt: 'Descent',
    },
    {
        src: pastel2.src,
        width: 1920,
        height: 1195,
        alt: 'Landscape',
    },
    {
        src: pastel3.src,
        width: 1920,
        height: 1200,
        alt: 'Wallride',
    },
    {
        src: pastel4.src,
        width: 1920,
        height: 1288,
        alt: 'Bine Žalohar',
    },
    {
        src: pastel5.src,
        width: 1920,
        height: 1920,
        alt: 'Naj Mekinc',
    },
    {
        src: pastel6.src,
        width: 1920,
        height: 1200,
        alt: 'Biker',
    },
    {
        src: pastel7.src,
        width: 1920,
        height: 1340,
        alt: 'Surfer coming out of water',
    },
    {
        src: pastel8.src,
        width: 1920,
        height: 1920,
        alt: 'RedBull Illume',
    },
    {
        src: pastel9.src,
        width: 1673,
        height: 1920,
        alt: 'BMX',
    },
    {
        src: pastel10.src,
        width: 1920,
        height: 1122,
        alt: 'BMX',
    },
    {
        src: pastel11.src,
        width: 1920,
        height: 1280,
        alt: 'Skydiving',
    },
    {
        src: pastel12.src,
        width: 1920,
        height: 1280,
        alt: 'Skydiving',
    },
    {
        src: pastel13.src,
        width: 1920,
        height: 1276,
        alt: 'Looking through the window',
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