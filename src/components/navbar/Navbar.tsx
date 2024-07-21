import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
  { text: 'Pricing', path: '/pricing' },
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>

      <Link href='/' className='flex items-center'> <HomeIcon size={16} /> <span className='ml-1'> Home</span> </Link>


      <div className='flex flex-1'></div>
      {navItems.map(item => (
        <ActiveLink path={item.path} text={item.text} key={item.path} />
      ))
      }
    </nav>
  )
}
