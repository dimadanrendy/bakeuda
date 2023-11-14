import React from 'react'
import { AiOutlineProfile, AiOutlineDownCircle, AiFillFile, AiOutlineAppstore } from "react-icons/ai";
import { MdCorporateFare, MdPublic } from "react-icons/md";
import { FcDocument } from "react-icons/fc";
import { FaDAndD } from "react-icons/fa";
import { HiDocumentDuplicate } from 'react-icons/hi';
import logobakeuda from "@/public/logobakeuda.png"
import logo from "@/public/logo.png"
import logosenyum from "@/public/logosenyum.png"
import Image from 'next/image'
import Link from 'next/link'



function Navbar() {

  // const menu = [
  //   {name: "Home", icon: <AiOutlineProfile/>, link: "/" },
  //   {name: "Beranda", icon: "", link: "/dashboard/Profile" },
  //   {name: "Setting", icon: "", link: "" },
  //   {name: "Alat", icon: "", link: "" }
  // ];

  return (

    <>
    {/* <div className='flex space-x-4'>
        {menu.map((val, i) => {
          return (
            <div key={i}>
                <div><Link className='flex items-center' href={val.link}>{val.name} {val.icon}</Link></div>
                
            </div>
          );
        })}
    </div> */}


      <div className="navbar space-x-80 xl:px-16 sm:items-center">
        <div className="flex-none">
          <Link href="/"><div><Image src={logobakeuda} width={300} height={300} alt='logoasd'/></div></Link>
        </div>
        <div className='navbar-end space-x-5 hidden md:flex'>
          <Image src={logo} width={100} height={100} alt='logosass' />
          <Image src={logosenyum} width={150} height={150} alt='logoff' />
        </div>
      </div>

      <div className='px-16 py-6 font-mono min-[360px]:hidden lg:block'>
        <ul className="menu lg:menu-horizontal rounded-box space-x-2">
          <li>
            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Beranda
            </Link>
          </li>
          <div className="dropdown dropdown-hover flex items-center font-mono">
            <label tabIndex={0} className="flex items-center space-x-2"><div className='mr-2'><MdCorporateFare className='h-5 w-5' /></div> Profile <AiOutlineDownCircle /></label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/dashboard/Profile">Sekilas Pandang</Link></li>
              <li><Link href="/dashboard/StrukturOrganisasi">Struktur Organisasi</Link></li>
            </ul>
          </div>

          <li>
            <Link href="/dashboard/DataDokumen">
              <HiDocumentDuplicate className='h-5 w-5' />
              Data<FaDAndD />Dokumen
            </Link>
          </li>

          <div className="dropdown dropdown-hover flex items-center font-mono">
            <label tabIndex={0} className="flex items-center space-x-2"><div className='mr-2'><MdPublic className='h-5 w-5' /></div> Layanan Public <AiOutlineDownCircle /></label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72">
              <li><a href='https://pajakonline.pangkalpinangkota.go.id'>Pajak Online Pangkalpinang</a></li>
              <li><a href='https://cekpbb.pangkalpinangkota.go.id'>Cek Pajak Bumi dan Bangunan</a></li>
            </ul>
          </div>

          <li>
            <Link href="/dashboard/Regulasi">
              <AiFillFile className='h-4 w-4' />
              Regulasi
            </Link>
          </li>
          <li>
            <Link href="/dashboard/Transparansi">
              <FcDocument className='h-5 w-5' />
              Transparansi PKD
            </Link>
          </li>
          <li>
            <a href='https://appkeu.pangkalpinangkota.go.id'>
              <AiOutlineAppstore className='h-5 w-5' />
              Aplikasi Terpadu
            </a>
          </li>
        </ul>
      </div>

      <div className="drawer xl:px-16 lg:hidden">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            {/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li><a>Navbar  1</a></li>
                <li><a>Navbar  2</a></li>
              </ul>
            </div>
          </div>

        </div>
        <div className="drawer-side z-40">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <div>
                <Image src={logo}  width={50} height={50} alt='ini-logo'/>
            </div>
            <div>
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </div>
          </ul>

        </div>
      </div>

    </>


  );
}

export default Navbar
