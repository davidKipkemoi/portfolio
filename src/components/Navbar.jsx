import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from "../styles"
import {navLinks} from '../constants'
import {logo, menu, close} from '../assets'


const Navbar = () => {
  
  const [active,setActive] = useState('')
  const [scrolled,setScrolled] = useState('')
  const [toggle,setToggle] = useState('')
  return (
    <nav
    className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}
  >
       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-20 h-20 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            David &nbsp;
            <span className='sm:block hidden'> | Kipkemoi</span>
          </p>
        </Link>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
              {
                navLinks.map((link)=>(
                  <li
                  key = {link.id}
                  className={`${
                    active === link.title ? "text-white" :
                    "text-secondary"
                  } hover:text-white text-[20px] font-medium cursor-pointer`}
                  onClick={()=>{
                    setActive(link.title)
                  }}
                  
                  >
                    <a href={`#${link.id}`}>
                      {link.title}
                    </a>
                  </li>
                ))
              }
          </ul>
            <div className='md:hidden flex flex-1 justify-end items-center'>
              <img 
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[25px]
              object-contain cursor-pointer'
              onClick={()=>setToggle(!toggle)}
              />
            </div>
      </div>
    </nav>
  ) 
}

export default Navbar