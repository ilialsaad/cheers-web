import { useEffect, useState } from 'react';

import roundLogo from '../img/roundLogo.svg';
import Facebook from '../img/facebook.svg';
import Instagram from '../img/instagram.svg';
import Whatsapp from '../img/whatsapp.svg';
import { LogoComp } from './Logo';



export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  return (
    <div className='relative'>
    <div
      className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ease-in-out pointer-events-none ${
        isMenuOpen ? 'block' : 'hidden'
      }`}>
      <div className='flex flex-col items-center justify-between p-8 h-screen w-3/4'>
        <div className='flex flex-col w-full'>
          <img src={roundLogo} alt='logo' width={80} />
        </div>
        <ul className='flex flex-col space-y-4 w-full'>
          <li className='border-b border-gray-200'>
            <a className='text-white hover:text-gray-800 transition duration-300' href=''>
              Nosotros
            </a>
          </li>
          <li className=' border-b border-gray-200'>
            <a className='text-white hover:text-gray-800 transition duration-300' href=''>
              Delivery
            </a>
          </li>
          <li className=' border-b border-gray-200'>
            <a className='text-white hover:text-gray-800 transition duration-300' href=''>
              Call Cheers
            </a>
          </li>
        </ul>
      
      
        <div className='flex flex-col space-y-4 w-full'>
          <ul className='flex space-x-6'>
            <li>
              <a
                href='https://www.whatsapp.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-800 transition duration-300'>
                <img src={Whatsapp} alt='whatsapp' width={24} height={24} />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-800 transition duration-300'>
                <img src={Instagram} alt='instagram' width={24} height={24} />
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-800 transition duration-300'>
                <img src={Facebook} alt='facebook' width={12} height={12} />
              </a>
            </li>
          </ul>
        </div>
        
        <div className='flex flex-col space-y-4 w-full'></div>
      </div>
    </div>

    <div className='flex items-center justify-between p-8 bg-header-menu'>
      <div className='flex w-full items-center justify-between'>
        <LogoComp />
        <ul className='hidden lg:flex space-x-4'>
          <li>
            <a className='text-gray-500 hover:text-gray-100 transition duration-300' href=''>
              Nosotros
            </a>
          </li>
          <li>
            <a className='text-gray-500 hover:text-gray-100 transition duration-300' href=''>
              Delivery
            </a>
          </li>
          <li>
            <a className='text-gray-500 hover:text-gray-100 transition duration-300' href=''>
              Call Cheers
            </a>
          </li>
        </ul>
      </div>
      <button
        className='lg:hidden text-gray-500 hover:text-gray-100 transition duration-300 z-50'
        onClick={toggleMenu}>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </button>
    </div>
  </div>
  );
};
