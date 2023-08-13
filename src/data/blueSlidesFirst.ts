import blue1 from '../../public/images/BLUE/_C6B0391-2.jpg'
import blue2 from '../../public/images/BLUE/_C6B0912mangart.jpg'
import blue3 from '../../public/images/BLUE/_C6B1407.jpg'
import blue4 from '../../public/images/BLUE/_C6B1723-2.jpg'
import blue5 from '../../public/images/BLUE/_C6B1986.jpg'
import blue6 from '../../public/images/BLUE/_C6B3133.jpeg'
import blue8 from '../../public/images/BLUE/_K4I0133.jpg'
import blue9 from '../../public/images/BLUE/_K4I1849.jpeg'
import blue11 from '../../public/images/BLUE/_C6B7163.jpg'
import blue17 from '../../public/images/BLUE/_O1I1070.jpg'
import blue19 from '../../public/images/BLUE/_O1I9384.jpeg'
import blue22 from '../../public/images/BLUE/binelighttrailmodra2.jpg'
import blue23 from '../../public/images/BLUE/DJI_0071.jpeg'
import blue29 from '../../public/images/BLUE/R11.jpg'
import { photo } from '@/photo'

const blueSection: photo[] = [
    {
        src: blue4.src,
        width: 4528,
        height: 2808,
        alt: 'Mountains',
    },
    {
        src: blue2.src,
        width: 3662,
        height: 2289,
        alt: 'Mountains',
    },
    {
        src: blue6.src,
        width: 4099,
        height: 3036,
        alt: 'Layers',
    },
    {
        src: blue22.src,
        width: 3900,
        height: 5046,
        alt: 'Line',        
    },
    {
        src: blue29.src,
        width: 5760,
        height: 3840,
        alt: 'Fire start',        
    },
    {
        src: blue9.src,
        width: 4137,
        height: 2975,
        alt: 'Ski touring',
    },
    {
        src: blue3.src,
        width: 5760,
        height: 3840,
        alt: 'Running',
    },
    {
        src: blue11.src,
        width: 2908,
        height: 3729,
        alt: 'Shapes',        
    },
    {
        src: blue23.src,
        width: 4521,
        height: 3193,
        alt: 'Snow',        
    },
    {
        src: blue19.src,
        width: 4545,
        height: 3030,
        alt: 'Hiking',        
    },
    {
        src: blue17.src,
        width: 4443,
        height: 2954,
        alt: 'Naj Mekinc',        
    },
    {
        src: blue8.src,
        width: 4347,
        height: 2717,
        alt: 'Winter camp',
    },
    {
        src: blue5.src,
        width: 5227,
        height: 3485,
        alt: 'Ski touring',
    },
    {
        src: blue1.src,
        width: 3585,
        height: 1976,
        alt: 'Surfing',
    },
];

const blueSlides = blueSection.map((photo) => {
    return {
        src: photo.src,
        width: photo.width,
        height: photo.height,
        alt: photo.alt,
    }
})

export default blueSlides;