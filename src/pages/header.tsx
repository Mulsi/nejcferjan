import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function Header() {

    const { t } = useTranslation();

    return (
        <>
            <div className='relative h-24 w-11/12 mx-auto z-20'>
                <div className='h-[inherit] w-11/12 fixed flex justify-between items-center'>
                    <div>
                        <h1 className='text-sm uppercase font-normal ml-2'>Nejc Ferjan</h1>
                    </div>

                    <div>
                        <Link href="/about" className='text-xs uppercase font-normal mr-2'>{t('about')}</Link>
                    </div>

                </div>
            </div>
        </>
    )
}
