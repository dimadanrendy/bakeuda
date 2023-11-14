"use client"
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/pgk.png'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='fixed top-0 z-50 w-full'>
    <div className="navbar bg-blue-100">
  <div className="flex-1 ml-5 space-x-5">
    <Link href="/admin"><Image src={logo} width={50} height={50} alt='logo'/></Link>
    <div>
      <h4 className='font-bold'>BADAN KEUANGAN DAERAH</h4>
      <h4 className='font-bold'>KOTA PANGKALPINANG</h4>
    </div>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn">
        <div className="w-10 justify-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={() => signOut()}>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
</nav>
  )
}
