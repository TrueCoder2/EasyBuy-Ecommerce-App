import React from 'react'
import heroImage from "../Hero/heroImage.jpg";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font   bg-yellow-200 py-24 drop-shadow-2xl">
      <div className="container mx-auto flex px-5 py-24 md:flex-row md:justify-center flex-col items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Get the product now before
            <br className="hidden lg:inline-block"/>they get sold
          </h1>
          <p className="mb-8 leading-relaxed"> <span className='text-xl text-orange-500' >Welcome to EasyBuy!</span> We carry all types of products, so you're sure to find what you're looking for. Our store is constantly updating with new items, so be sure to check back often. <span className='text-xl text-lime-700' >Jaldi Aoo or Jaldi Pao.</span> </p>
          <div className="flex justify-center">
            <button className="inline-flex text-black bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-lg hover:scale-110">Show All Products</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg hover:scale-110">Contact Us</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded w-[650px] " alt="hero" src={heroImage}/>
        </div>
      </div>
    </section>
  )
}

export default Hero