import Image from "next/image"
import feri from '../../public/images/portrait.jpg'
import Link from "next/link"
import useTranslation from 'next-translate/useTranslation';
import Footer from "./footer";
import instagram from '../../public/instagram.svg'


export default function About() {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <div className='relative h-24 w-11/12 mx-auto z-20'>
                    <div className='h-[inherit] w-11/12 fixed flex justify-center items-center'>
                        <h1 className="text-sm uppercase">{t('about')}</h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image src={feri} alt="Nejc Ferjan portrait" className="w-11/12 sm:w-8/12" />
                </div>
                <div className="flex justify-center mt-12">
                    <p className="text-md font-thin w-11/12">
                        {t('aboutText')}
                    </p>
                </div>
                <div className="flex flex-col items-center gap-2 mt-12 text-xs">
                    <a href='https://www.instagram.com/nejcferjan/' target="_blank">
                        <Image src={instagram} priority alt="Instagram" />
                    </a>
                    <a href="mailto:hello@nejcferjan.com">hello@nejcferjan.com</a>
                </div>
                <div className="flex h-24 items-center justify-center">
                    <Link href='/' className="text-sm uppercase">{t('home')}</Link>
                </div>
                <Footer />

            </div>
        </>
    )
}