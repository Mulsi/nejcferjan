import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const { t } = useTranslation();
    let loaderShown: any

    useEffect(() => {
        const handleRouteChange = () => {
            loaderShown = localStorage.getItem('loaderShown');
        }
        router.events.on('routeChangeStart', handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])

    return (
        <>
            <div className='relative h-24 w-11/12 mx-auto z-20'>
                <div className='h-[inherit] w-11/12 fixed flex justify-between items-center'>
                    <div>
                        <Link href='/' className='flex justify-center text-sm uppercase font-normal ml-2'>Nejc Ferjan</Link>
                    </div>

                    <div>
                        <Link href="/about" className='text-sm uppercase font-normal mr-2'>{t('about')}</Link>
                    </div>

                </div>
            </div>
        </>
    )
}
