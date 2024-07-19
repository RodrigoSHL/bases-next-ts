import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>

      <Link href='/' className='flex items-center'> <HomeIcon size={16} /> <span className='ml-1'> Home</span> </Link>


      <div className='flex flex-1'></div>
      <Link className='mr-2' href='/about'>About</Link>
      <Link className='mr-2' href='/contact'>Contact</Link>
      <Link className='mr-2' href='/pricing'>Pricing</Link>


    </nav>
  )
}
