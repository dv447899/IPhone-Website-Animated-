import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 2 })
        gsap.to("#cta", { opacity: 1, y: -50, delay:2 })
    })

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    })
    return (
        <section className='w-full nav-height bg-black relative'>
            <div className='h-5/6'>
                <p id="hero" className='hero-title'>IPhone 15 Pro</p>
                <div className='md:w-12/12 w-12/12'>
                    <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} />
                    </video>
                </div>
            </div>
            <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
                <a href="#highlights" className='btn'>Buy</a>
                <p className='font-normal text-xl' >From Rs 8,500/months or Rs 8,500</p>
            </div>

        </section>
    )
}

export default Hero