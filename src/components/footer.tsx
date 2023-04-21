import profilePic from '@/../public/images/background.webp'
import Image from 'next/image'


export default function Footer() {
    return (
        <div className='grid grid-cols-1 grid-rows-1 max-h-36 overflow-hidden pt-8 text-slate-100'>
            <Image src={profilePic} alt='Space background' className='-z-10 object-cover top-0 col-start-1 row-start-1 max-h-36' />
            <div className='flex flex-col col-start-1 row-start-1 items-center justify-center'>
                <p>@Made by Jaro | {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}