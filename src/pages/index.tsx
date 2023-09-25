import Header from './header'
import Footer from './footer'
import "yet-another-react-lightbox/styles.css";
import { useEffect, useState } from 'react'
import Image from "next/image";
import mainBlue from '../../public/images/BLUE/_C6B1723-2.jpg'
import mainGreen from '../../public/images/GREEN/_C6B4440.jpg'
import mainPastel from '../../public/images/PASTEL/_I7A0163.jpg'
import mainWhite from '../../public/images/WHITE/_K4I8407c2.jpg'
import mainBnw from '../../public/images/BNW/_K4I7049.jpg'
import Loader from './loader';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const [showBlueButton, setShowBlueButton] = useState(false);
  const [showGreenButton, setShowGreenButton] = useState(false);
  const [showPastelButton, setShowPastelButton] = useState(false);
  const [showWhiteButton, setShowWhiteButton] = useState(false);
  const [showBnwButton, setShowBnwButton] = useState(false);
  const [loading, setLoading] = useState(true)
  const [storedData, setStoredData] = useState(null);
  const { t } = useTranslation();
  const [innerWidth, setInnerWidth] = useState(0);
  const [showBlueMobileCta, setShowBlueMobileCta] = useState(false);
  const [showGreenMobileCta, setShowGreenMobileCta] = useState(false);
  const [showPastelMobileCta, setShowPastelMobileCta] = useState(false);
  const [showWhiteMobileCta, setShowWhiteMobileCta] = useState(false);
  const [showBnwMobileCta, setShowBnwMobileCta] = useState(false);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    const storedItem: any = localStorage.getItem('loaderShown');
    if (storedItem) {
      setStoredData(storedItem);
    }
    if (loading && storedItem !== 'true') {
      document.querySelector('body')?.classList.add('disable-scroll');
    }
    const timer = setTimeout((() => {
      setLoading(false)
    }), 2500)
    return () => clearTimeout(timer)
  })

  const handleBlueMobileTouch = () => {
    if (window.innerWidth < 640) {
      setShowBlueMobileCta(true);
    }
  }
  const handleBlueMobileTouchEnd = () => {
    if (window.innerWidth < 640) {
      setShowBlueMobileCta(false);
    }
  }

  const handleGreenMobileTouch = () => {
    if (window.innerWidth < 640) {
      setShowGreenMobileCta(true);
    }
  }
  const handleGreenMobileTouchEnd = () => {
    if (window.innerWidth < 640) {
      setShowGreenMobileCta(false);
    }
  }

  const handlePastelMobileTouch = () => {
    if (window.innerWidth < 640) {
      setShowPastelMobileCta(true);
    }
  }
  const handlePastelMobileTouchEnd = () => {
    if (window.innerWidth < 640) {
      setShowPastelMobileCta(false);
    }
  }

  const handleWhiteMobileTouch = () => {
    if (window.innerWidth < 640) {
      setShowWhiteMobileCta(true);
    }
  }
  const handleWhiteMobileTouchEnd = () => {
    if (window.innerWidth < 640) {
      setShowWhiteMobileCta(false);
    }
  }

  const handleBnwMobileTouch = () => {
    if (window.innerWidth < 640) {
      setShowBnwMobileCta(true);
    }
  }
  const handleBnwMobileTouchEnd = () => {
    if (window.innerWidth < 640) {
      setShowBnwMobileCta(false);
    }
  }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleMobileScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleMobileScroll);
  //   };
  // }, [])

  const goToBlueDetail = () => {
    window.location.href = '/blue';
  }
  const goToGreenDetail = () => {
    window.location.href = '/green';
  }
  const goToPastelDetail = () => {
    window.location.href = '/pastel';
  }
  const goToWhiteDetail = () => {
    window.location.href = '/white';
  }
  const goToBnwDetail = () => {
    window.location.href = '/bnw';
  }


  return (
    <>
      {!storedData && <Loader loading={loading} />}
      <Header></Header>
      <main className='w-11/12 flex justify-center mx-auto'>
        <div className={`flex flex-col gap-12 justify-center mb-8`}>
          <div className='blue relative' onMouseEnter={() => setShowBlueButton(true)} onMouseLeave={() => setShowBlueButton(false)} onTouchStart={handleBlueMobileTouch} onTouchEnd={handleBlueMobileTouchEnd}>
            <Image src={mainBlue} alt="Mountains" priority />
            <button style={{ opacity: showBlueButton ? 1 : showBlueMobileCta ? 1 : 0 }} className={'button-animation absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 text-xs w-[125px] h-[125px] border-2 border-white rounded-full'} onClick={goToBlueDetail}>{t('showMore')}</button>
            {/* <Link href='/blue' style={{ opacity: showBlueButton ? 1 : 0 }} className='button-animation flex items-center justify-center absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 text-xs w-[125px] h-[125px] border-2 border-white rounded-full'>{t('showMore')}</Link> */}
          </div>
          <div className='green relative' onMouseEnter={() => setShowGreenButton(true)} onMouseLeave={() => setShowGreenButton(false)} onTouchStart={handleGreenMobileTouch} onTouchEnd={handleGreenMobileTouchEnd}>
            <Image src={mainGreen} alt="Bine Žalohar" priority />
            <button style={{ opacity: showGreenButton ? 1 : showGreenMobileCta ? 1 : 0 }} className='button-animation absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 text-xs w-[125px] h-[125px] border-2 border-white rounded-full' onClick={goToGreenDetail}>{t('showMore')}</button>
          </div>
          <div className='pastel relative' onMouseEnter={() => setShowPastelButton(true)} onMouseLeave={() => setShowPastelButton(false)} onTouchStart={handlePastelMobileTouch} onTouchEnd={handlePastelMobileTouchEnd}>
            <Image src={mainPastel} alt="Wallrider" priority />
            <button style={{ opacity: showPastelButton ? 1 : showPastelMobileCta ? 1 : 0 }} className='button-animation absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 text-xs w-[125px] h-[125px] border-2 border-white rounded-full' onClick={goToPastelDetail}>{t('showMore')}</button>
          </div>
          <div className='white relative' onMouseEnter={() => setShowWhiteButton(true)} onMouseLeave={() => setShowWhiteButton(false)} onTouchStart={handleWhiteMobileTouch} onTouchEnd={handleWhiteMobileTouchEnd}>
            <Image src={mainWhite} alt="Freeride skiing" priority />
            <button style={{ opacity: showWhiteButton ? 1 : showWhiteMobileCta ? 1 : 0 }} className='button-animation absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 text-xs w-[125px] h-[125px] border-2 border-white rounded-full' onClick={goToWhiteDetail}>{t('showMore')}</button>
          </div>
          <div className='bnw relative' onMouseEnter={() => setShowBnwButton(true)} onMouseLeave={() => setShowBnwButton(false)} onTouchStart={handleBnwMobileTouch} onTouchEnd={handleBnwMobileTouchEnd}>
            <Image src={mainBnw} alt="Naj Mekinc" priority />
            <button style={{ opacity: showBnwButton ? 1 : showBnwMobileCta ? 1 : 0 }} className='button-animation absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 text-xs w-[125px] h-[125px] border-2 border-white rounded-full' onClick={goToBnwDetail}>{t('showMore')}</button>
          </div>

        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
