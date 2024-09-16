import LogoSvg from '@/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { BsDiscord, BsInstagram, BsTwitter } from 'react-icons/bs'

const Header = () => {
    return (
        <div className=''>
            <header className='w-full  bg-transparent backdrop-blur-xl fixed'>
                <div className='flex justify-between w-full'>
                    <div>
                        <Link href={'/'} className='' >
                            <h1 className='font-bold text-xl px-5 py-4  text-clip'> AZSA</h1>
                        </Link>
                    </div>
                    <div className='lg:flex hidden py-4 gap-x-10'>
                        <Link href={'/'}>Works</Link>
                        <Link href={'/'}>Works</Link>
                        <Link href={'/'}>Works</Link>
                        <Link href={'/'}>Works</Link>
                    </div>
                    <div>
                        <nav className='py-4 px-1 gap-x-8'>
                            <div className='flex px-3 gap-x-3'>
                                <Link href={'/'}>
                                <BsDiscord size={25} className='text-blue-600' />
                                </Link>
                                <Link href={'/'}>
                                 <BsTwitter className='text-sky-600'  size={25}/>
                                </Link>
                                <Link href={'/'}>
                                 <BsInstagram  className='text-rose-500 ' size={25} />
                                </Link>
                                <Link href={'/'}>
                                <button className='bg-gradient-to-b from-fuchsia-700 border-white border-opacity-10  rounded-lg w-20' >Start</button>
                                </Link>
                              
                            </div>
                            
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
