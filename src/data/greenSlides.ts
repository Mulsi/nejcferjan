import { photo } from '@/photo'
import green1 from '../../public/images/GREEN/_C6B4440.jpeg'
import green2 from '../../public/images/GREEN/_C6B4497-3.jpg'
import green3 from '../../public/images/GREEN/_C6B8719.jpeg'
import green4 from '../../public/images/GREEN/_C6B8812.jpeg'
import green5 from '../../public/images/GREEN/_I7A0216last.jpg'
import green6 from '../../public/images/GREEN/_O1I4491.jpeg'
import green7 from '../../public/images/GREEN/BinePerniki1.jpg'
import green8 from '../../public/images/GREEN/BinePortret.jpg'
import green9 from '../../public/images/GREEN/NF_20210609_BMXMaze_5688.jpeg'
import green10 from '../../public/images/GREEN/NF_20210610_BMXMaze_5986.jpeg'
import green11 from '../../public/images/GREEN/NF_20210610_BMXMaze_6010.jpeg'
import green12 from '../../public/images/GREEN/NF_20210610_MXMaze_5922.jpeg'

const greenSection: photo[] = [
    {
        src: green1.src,
        width: 4403,
        height: 2752,
        alt: 'Downhill',
    },
    {
        src: green2.src,
        width: 5386,
        height: 3546,
        alt: 'Road',
    },
    {
        src: green3.src,
        width: 5349,
        height: 3532,
        alt: 'Luka Kovačič',
    },
    {
        src: green4.src,
        width: 3189,
        height: 2202,
        alt: 'Mountain runner',
    },
    {
        src: green5.src,
        width: 7606,
        height: 5073,
        alt: 'Woods',
    },
    {
        src: green6.src,
        width: 5472,
        height: 3648,
        alt: 'Mountains',
    },
    {
        src: green7.src,
        width: 4974,
        height: 3109,
        alt: 'Downhill',
    },
    {
        src: green8.src,
        width: 5472,
        height: 3420,
        alt: 'Bine Žalohar',
    },
    {
        src: green9.src,
        width: 4302,
        height: 3126,
        alt: 'BMX',
    },
    {
        src: green10.src,
        width: 4414,
        height: 3097,
        alt: 'Redbull',
    },
    {
        src: green11.src,
        width: 4361,
        height: 3094,
        alt: 'Wallride',
    },
    {
        src: green12.src,
        width: 4240,
        height: 2974,
        alt: 'BMX jump',
    },
];

const greenSlides = greenSection.map((photo) => {
    return {
        src: photo.src,
        width: photo.width,
        height: photo.height,
        alt: photo.alt,
    }
})

export default greenSlides;