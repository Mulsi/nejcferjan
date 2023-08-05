import blue1 from '../../public/images/BLUE/_C6B0391-2.jpg'
import blue2 from '../../public/images/BLUE/_C6B0912mangart.jpg'
import blue3 from '../../public/images/BLUE/_C6B1407.jpg'
import blue4 from '../../public/images/BLUE/_C6B1723-2.jpg'
import blue5 from '../../public/images/BLUE/_C6B1986.jpg'
import blue6 from '../../public/images/BLUE/_C6B3133.jpeg'
import blue8 from '../../public/images/BLUE/_K4I0133.jpg'
import blue9 from '../../public/images/BLUE/_K4I1849.jpeg'
import blue10 from '../../public/images/BLUE/_C6B7078.jpg'
import blue11 from '../../public/images/BLUE/_C6B7163.jpg'
import blue12 from '../../public/images/BLUE/_C6B8971.jpg'
import blue14 from '../../public/images/BLUE/micvajzresized.jpg'
import blue15 from '../../public/images/BLUE/_K4I3871-2.jpeg'
import blue16 from '../../public/images/BLUE/_K4I7188.jpg'
import blue17 from '../../public/images/BLUE/_O1I1070.jpg'
import blue18 from '../../public/images/BLUE/_O1I1323.jpg'
import blue19 from '../../public/images/BLUE/_O1I9384.jpeg'
import blue20 from '../../public/images/BLUE/_O1I9550.jpeg'
import blue21 from '../../public/images/BLUE/_V3A0084.jpg'
import blue22 from '../../public/images/BLUE/binelighttrailmodra2.jpg'
import blue23 from '../../public/images/BLUE/DJI_0071.jpeg'
import blue25 from '../../public/images/BLUE/Najvogelhanddrag.jpg'
import blue26 from '../../public/images/BLUE/NF_20220816_Skydiving_over_Landshut_7842.jpeg'
import blue27 from '../../public/images/BLUE/NF_20220817_Skydiving_over_Landshut_8378.jpeg'
import blue28 from '../../public/images/BLUE/NF_20220818_Skydiving_over_Landshut_8722.jpeg'
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