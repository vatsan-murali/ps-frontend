import React from 'react'
import { TbSearch } from 'react-icons/tb';

const SearchBar = () => {
  return (
    <div>
      <div className='flex mt-[40vw] items-center mb-8'>
        <input type='search' placeholder='Search Title...' className= 'placeholder:lg:text-base placeholder:md:text-sm placeholder:sm:text-xs lg:ml-[15rem] md:ml-[10rem] sm:ml-[8rem] border border-slate-500 rounded-lg lg:p-4 md:p-3 sm:p-[9px] lg:pl-[3rem] md:pl-[3rem] sm:pl-[2rem] 2xl:w-[35rem] xl:w-[30rem] lg:w-[26rem] md:w-[20rem] sm:w-[15rem] '/>
        <div className='flex items-center relative'>
          <button className='bg-blue-700 px-4 py-2 rounded-lg lg:text-base md:text-sm sm:text-xs font-semibold text-white lg:-ml-[5.5rem] md:-ml-[5rem] sm:-ml-[4.6rem] hover:bg-blue-900 active:ring-offset-1 active:ring-blue-300 active:ring '>Search</button>
          <TbSearch className='2xl:-ml-[34rem] xl:-ml-[29rem] lg:-ml-[25rem] md:-ml-[19rem] sm:-ml-[14.5rem] text-[23px] sm:text-[20px] text-slate-600 absolute'/>
        </div>
        <input type='search' placeholder='Search Tag...' className= 'placeholder:lg:text-base placeholder:md:text-sm placeholder:sm:text-xs lg:ml-[7rem] md:ml-[3rem] sm:ml-[2rem] border border-slate-500 rounded-lg lg:p-4 md:p-3 sm:p-[9px] lg:pl-[3rem] md:pl-[3rem] sm:pl-[2rem] 2xl:w-[25rem] xl:w-[20rem] lg:w-[16rem] md:w-[16rem] sm:w-[12rem]'/>
        <div className='flex items-center relative'>
          <button className='bg-blue-700 px-4 py-2 rounded-lg lg:text-base md:text-sm sm:text-xs font-semibold text-white lg:-ml-[5.5rem] md:-ml-[5rem] sm:-ml-[4.6rem] hover:bg-blue-900 active:ring-offset-1 active:ring-blue-300 active:ring absolute'>Search</button>
          <TbSearch className='2xl:-ml-[24rem] xl:-ml-[19rem] lg:-ml-[15rem] md:-ml-[15rem] sm:-ml-[11.5rem] text-[23px] sm:text-[20px] text-slate-600 absolute'/>
        </div>
      </div>
    </div>
  )
}

export default SearchBar