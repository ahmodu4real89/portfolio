import React from 'react'
import bgm from '../assets/bgc.jpg'
function Home() {
  return (
    <main>
      <img src={bgm} alt="background image" className="absolute object-cover w-full h-full"/>
    <section className="relative flex justify-center min-h-screen pt-12 lg:pt-58 px-8">
      <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name" >Hello, Ahmodu Page</h1>
    </section>
    </main>
  )
}

export default Home
