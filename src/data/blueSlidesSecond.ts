import blue10 from '../../public/images/BLUE/_C6B7078.jpg'
import blue12 from '../../public/images/BLUE/_C6B8971.jpg'
import blue14 from '../../public/images/BLUE/micvajzresized.jpg'
import blue15 from '../../public/images/BLUE/_K4I3871-2.jpeg'
import blue16 from '../../public/images/BLUE/_K4I7188.jpg'
import blue18 from '../../public/images/BLUE/_O1I1323.jpg'
import blue20 from '../../public/images/BLUE/_O1I9550.jpeg'
import blue21 from '../../public/images/BLUE/_V3A0084.jpg'
import blue25 from '../../public/images/BLUE/Najvogelhanddrag.jpg'
import blue26 from '../../public/images/BLUE/NF_20220816_Skydiving_over_Landshut_7842.jpeg'
import blue27 from '../../public/images/BLUE/NF_20220817_Skydiving_over_Landshut_8378.jpeg'
import blue28 from '../../public/images/BLUE/NF_20220818_Skydiving_over_Landshut_8722.jpeg'
import { photo } from '@/photo'

const blueSection: photo[] = [
    {
        src: blue14.src,
        width: 5028,
        height: 3352,
        alt: 'Backcountry snowboarding',        
    },
    {
        src: blue15.src,
        width: 2210,
        height: 1381,
        alt: 'Snowboarder',        
    },
    {
        src: blue18.src,
        width: 5257,
        height: 3505,
        alt: 'Snowbarder',        
    },
    {
        src: blue20.src,
        width: 5461,
        height: 3616,
        alt: 'Fog',        
    },
    {
        src: blue21.src,
        width: 5199,
        height: 3249,
        alt: 'Ski touring',        
    },
    {
        src: blue27.src,
        width: 2289,
        height: 3433,
        alt: 'Redbull',        
    },
    {
        src: blue28.src,
        width: 4624,
        height: 3083,
        alt: 'Redbull',        
    },
    {
        src: blue26.src,
        width: 4506,
        height: 3004,
        alt: 'Athlete',        
    },
    {
        src: blue25.src,
        width: 4088,
        height: 2555,
        alt: 'Bike',        
    },
    {
        src: blue10.src,
        width: 3590,
        height: 4794,
        alt: 'Above the clouds',        
    },
    {
        src: blue16.src,
        width: 4443,
        height: 2954,
        alt: 'BMX',        
    },
    {
        src: blue12.src,
        width: 2486,
        height: 2464,
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