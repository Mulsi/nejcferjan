import { photo } from '@/photo'
import pastel2 from '../../public/images/PASTEL/_C6B6411.jpg'
import pastel3 from '../../public/images/PASTEL/_C6B6513.jpg'
import pastel4 from '../../public/images/PASTEL/_C6B7251.jpg'
import pastel5 from '../../public/images/PASTEL/_C6B7979.jpg'
import pastel6 from '../../public/images/PASTEL/_C6B8565.jpg'
import pastel7 from '../../public/images/PASTEL/_K4I1488.jpg'
import pastel9 from '../../public/images/PASTEL/_K4I5419.jpg'
import pastel10 from '../../public/images/PASTEL/_K4I9285.jpg'
import pastel11 from '../../public/images/PASTEL/_K4I9449.jpg'
import pastel12 from '../../public/images/PASTEL/_K4I9831.jpg'
import pastel13 from '../../public/images/PASTEL/local1.jpg'
import pastel14 from '../../public/images/PASTEL/MitjaObala.jpg'
import pastel15 from '../../public/images/PASTEL/NejcFerjanRBI.jpg'
import pastel16 from '../../public/images/PASTEL/NF_20210609_BMXMaze_0508.jpg'
import pastel17 from '../../public/images/PASTEL/NF_20220816_Skydiving_over_Landshut_7777.jpg'

const pastelSection: photo[] = [
    {
        src: pastel2.src,
        width: 2170,
        height: 2800,
        alt: 'Wheely',
    },
    {
        src: pastel3.src,
        width: 3600,
        height: 2300,
        alt: 'Descent',
    },
    {
        src: pastel4.src,
        width: 5272,
        height: 3252,
        alt: 'Mountains',
    },
    {
        src: pastel5.src,
        width: 3800,
        height: 2365,
        alt: 'Landscape',
    },
    {
        src: pastel6.src,
        width: 2169,
        height: 2800,
        alt: 'Surfer on the beach',
    },
    {
        src: pastel7.src,
        width: 2274,
        height: 2842,
        alt: 'Biker',
    },
    {
        src: pastel9.src,
        width: 3100,
        height: 3100,
        alt: 'Naj Mekinc',
    },
    {
        src: pastel10.src,
        width: 2080,
        height: 2600,
        alt: 'Biker',
    },
    {
        src: pastel11.src,
        width: 3126,
        height: 1954,
        alt: 'Biker',
    },
    {
        src: pastel12.src,
        width: 2400,
        height: 3000,
        alt: 'Lines',
    },
    {
        src: pastel13.src,
        width: 3600,
        height: 2512,
        alt: 'Surfer coming from the water',
    },
    {
        src: pastel14.src,
        width: 2398,
        height: 3600,
        alt: 'Downhill',
    },
    {
        src: pastel15.src,
        width: 2600,
        height: 2600,
        alt: 'Redbull illume',
    },
    {
        src: pastel16.src,
        width: 2178,
        height: 2500,
        alt: 'Jump',
    },
    {
        src: pastel17.src,
        width: 3300,
        height: 2200,
        alt: 'Parachute',
    },
];

const pastelSlides = pastelSection.map((photo) => {
    return {
        src: photo.src,
        width: photo.width,
        height: photo.height,
        alt: photo.alt,
    }
})

export default pastelSlides;