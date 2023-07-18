import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png';

const navigations = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Products',
    path: '/products'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]

const Header = () => {
  return (
    <header className="text-gray-600 body-font drop-shadow-xl bg-yellow-200 fixed z-50 w-[100%] h-[90px] mt-0 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src= {logo} className='h-14 w-18' alt="Logo"/>
          <span className=" text-xl">EasyBuy</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center">
          {
            navigations.map((navigation) => {
              return (
                <Link to={navigation.path} className="mr-5 hover:text-yellow-600 hover:text-2xl">{navigation.name}</Link>
              )
            })
          }
        </nav>
        <Link to={'/cart'} className="inline-flex items-center bg-yellow-400 border-0 py-1 px-3 focus:outline-none hover:bg-sky-200 rounded text-base mt-4 md:mt-0 hover:scale-110">Go to Cart
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default Header