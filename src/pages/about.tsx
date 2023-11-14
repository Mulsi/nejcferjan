import Image from "next/image"
import feri from '../../public/images/portrait.jpg'
import Link from "next/link"
import useTranslation from 'next-translate/useTranslation';
import Footer from "./footer";
import instagram from '../../public/instagram.svg'
import Header from './header'

export default function About() {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <Header />
                <div className="flex justify-center">
                    <Image src={feri} alt="Nejc Ferjan portrait" className="w-11/12 sm:w-8/12" priority />
                </div>
                <div className="flex justify-center mt-12">
                    <p className="text-md text-center font-thin w-11/12 sm:w-8/12">
                        {t('aboutText')}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-2 my-12 text-xs">
                    <h2>{t('getInTouch')}</h2>
                    <a className="my-2 font-thin" href="mailto:hello@nejcferjan.com">hello@nejcferjan.com</a>
                    <a href='https://www.instagram.com/nejcferjan/' target="_blank">
                        <Image src={instagram} alt="Instagram" />
                    </a>
                </div>
                <Footer />

            </div>
        </>
    )
}