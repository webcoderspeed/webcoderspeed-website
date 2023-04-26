import { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { RiMenu3Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={'bg-white shadow-md px-4'}>
      <nav className='container mx-auto flex justify-between items-center py-4 md:py-6'>
        {/* Logo */}
        <div className='flex items-center'>
          <Link
            href='/'
            className='text-lg font-bold text-gray-800 '
          >
            <Image
              src='/logo.png'
              alt='webcoderspeed'
              width={40}
              height={40}
              className='rounded-full'
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-4'>
          <li>
            <a
              href='#home'
              className={`hover:text-blue-500`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about'
              className={`hover:text-blue-500`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#services'
              className={`hover:text-blue-500`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className={`hover:text-blue-500`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={toggleMenu}
            className={'text-gray-800 outline-none'}
          >
            {isOpen ? (
              <AiOutlineClose className='h-6 w-6' />
            ) : (
              <RiMenu3Fill className='h-6 w-6' />
            )}
          </button>
        </div>

        {/* Mobile Menu Items */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
          transition={{ duration: 0.4 }}
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden absolute top-16 right-0 bg-white w-full z-10 shadow-md divide-y divide-gray-200 `}
        >
          <li>
            <a
              href='#home'
              className={`block py-4 px-6`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about'
              className={`block py-4 px-6`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className={`block py-4 px-6`}
            >
              Contact
            </a>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
