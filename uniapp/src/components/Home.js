import React from 'react'
import Hero from './Hero.js'
import SearchBar from './SearchBar.js'
import Content from './Content.js'

const Home = () => {
  return (
    <div className='bg-slate-300 h-full'>
        <Hero />
        <SearchBar />
        <Content />
    </div>
  )
}

export default Home