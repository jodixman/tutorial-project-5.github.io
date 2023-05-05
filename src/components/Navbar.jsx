import { useState } from 'React';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      {/* Logo */}
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]'/>
      
      {/* List NavBar */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) =>(
          <li 
          key={nav.id} 
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10' } text-white`}> 
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div className={`sm:hidden flex flex-2 justify-center items-center`}>
        <img src={toggle ? close : menu} 
        alt='menu'
        className='w-[28px] h-[28px] object-contain cursor-pointer'
        onClick={() => setToggle((prev) => !prev)}
        />

        {/* saat toggle di nyalakan maka flex kalau di matikan hidden */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}> 

          <ul className='list-none flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) =>(
            <li 
              key={nav.id} 
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-14' } text-white`}> {/* ${index} => membuat nav muncul atau tidak */}
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar