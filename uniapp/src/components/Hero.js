import React from 'react'
import hero from '../images/hero.png'
import bio from '../images/bio.png'
import bus from '../images/bus.png'
import cs from '../images/cs.png'
import ai from '../images/ai.png'

const Hero = () => {
  return (
    <div>
        <div className='flex'>
            <img src = {hero} className='h-[36vw] w-screen object-cover border-b-4 border-b-black absolute z-[0]'/>
            <div>
                <img src={cs} className='absolute rounded-full h-[16vw] w-[16vw] object-cover border-2 border-white top-[11vw] left-[21vw] shadow-lg shadow-slate-800 z-[1] p-[0.5]' />
                <img src={bus} className='absolute rounded-full h-[9vw] w-[9vw] object-cover border-2 border-white top-[3.5vw] left-[37vw] shadow-lg shadow-slate-800 z-[1] p-[0.5]' />
                <img src={bio} className='absolute rounded-full h-[12vw] w-[12vw] object-cover border-2 border-white top-[21vw] left-[40vw] shadow-lg shadow-slate-800 z-[1] p-[0.5]' />
                <img src={ai} className='absolute rounded-full h-[12vw] w-[12vw] object-cover border-2 border-white top-[3.3vw] left-[53vw] shadow-lg shadow-slate-800 z-[1] p-[0.5]' />
            </div>
        </div>
        
    </div>
  )
}

export default Hero