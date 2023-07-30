import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function Footer() {

    const { t } = useTranslation();
    const router = useRouter();
    const currentUrl = router.asPath;

    return (
        <>
            <div className=''>
                <div className='language-selector h-12 md:h-24 w-fit right-0 fixed flex bottom-0 items-center justify-end'>
                    <div className='text-xs flex mx-2'>
                        <Link href={currentUrl} locale="en" scroll={false}>
                            <h2 className={router.locale === "en" ? "underline" : ""}>ENG</h2>
                        </Link>
                        <p className='px-1'>/</p>
                        <Link href={currentUrl} locale="sl" scroll={false}>
                            <h2 className={router.locale === "sl" ? "underline" : ""}>SLO</h2>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}