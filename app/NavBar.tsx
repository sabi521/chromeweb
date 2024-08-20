import Link from 'next/link'
import React from 'react'

const NavBar = () => {

    const links = [
        {label: 'Home', href: "/"},
        {label: 'Team', href: "/"},
        {label: 'Contact', href: "/"}
    ]
  return (
    <nav className='flex space-x-6 borderob px-5 h-14 items-center bg-black'>
        <Link className='text-3xl text-white' href="/">Logo</Link>
        <ul className='flex space-x-6'>
            {links.map(link=> 
            <Link key={link.href} className='text-white hover:text-blue-500 transition-colors' href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar
