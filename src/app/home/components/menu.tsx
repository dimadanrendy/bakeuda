import Link from 'next/link'
import Image from 'next/image'
import logobakeuda from "../../../../public/logobakeuda.png"
import logo from "../../../../public/logo.png"
import logosenyum from "../../../../public/logosenyum.png"
import { AiOutlineProfile, AiOutlineDownCircle, AiFillFile, AiOutlineSearch } from "react-icons/ai";
import { MdCorporateFare, MdPublic } from "react-icons/md";
import { BiNews } from "react-icons/bi"
import { FcDocument } from "react-icons/fc";
import { FaDAndD } from "react-icons/fa";
import { HiDocumentDuplicate } from 'react-icons/hi'; 

function ViewMenu() {
  return (
<>
    
        {/* {menu.map((link, index)=> (
        
        <ul className="menu menu-horizontal bg-base-200 w-56 rounded-box" key={index}>
            <li><Link href={link.link}>{link.name}</Link></li>
        </ul>
        
        ))} */}
      <div className="navbar space-x-80 xl:px-16 sm:items-center " data-aos="zoom-in">
        <div className="flex-none">
          <Link href="/home"><div><Image src={logobakeuda} width={300} height={300} alt='logoasd'/></div></Link>
        </div>
        <div className='navbar-end space-x-5 hidden md:flex'>
          <Image src={logo} width={100} height={100} alt='logosass' />
          <Image src={logosenyum} width={150} height={150} alt='logoff' />
        </div>
      </div>

      <div className='navbar px-16 py-2 font-mono min-[360px]:hidden lg:block shadow-2xl z-50' >
        <ul className="menu lg:menu-horizontal rounded-box space-x-2">
          <li>
            <Link href="/home">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Beranda
            </Link>
          </li>
          <div className="dropdown dropdown-hover flex items-center font-mono z-50">
            <label tabIndex={0} className="flex items-center space-x-2"><div className='mr-2'><MdCorporateFare className='h-5 w-5' /></div> Profile <AiOutlineDownCircle /></label>
            <ul tabIndex={0} className="mt-40 dropdown-content hover:z-50 menu p-2 shadow bg-base-100 rounded-box w-72">
              <li><Link href="/home/profile">Sekilas Pandang</Link></li>
              <li><Link href="/home/visi-misi">Visi Misi</Link></li>
              <li><Link href="/home/struktur-organisasi">Struktur Organisasi</Link></li>
            </ul>
          </div>

          <li>
            <Link href="/home/berita">
              <BiNews className='h-5 w-5' />
              Berita 
            </Link>
          </li>

          <li>
            <Link href="/home/dokumen">
              <HiDocumentDuplicate className='h-5 w-5' />
              Data Dokumen
            </Link>
          </li>

          <div className="dropdown dropdown-hover flex items-center font-mono">
            <label tabIndex={0} className="flex items-center space-x-2"><div className='mr-2'><MdPublic className='h-5 w-5' /></div> Layanan Public <AiOutlineDownCircle /></label>
            <ul tabIndex={0} className="mt-32 dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-72">
              <li><a href='https://pajakonline.pangkalpinangkota.go.id'>Pajak Online Pangkalpinang</a></li>
              <li><a href='https://cekpbb.pangkalpinangkota.go.id'>Cek Pajak Bumi dan Bangunan</a></li>
            </ul>
          </div>

          {/* <li>
            <Link href="/home/regulasi">
              <AiFillFile className='h-4 w-4' />
              Regulasi
            </Link>
          </li> */}
          <li>
            <Link href="/home/transparansi">
              Transparansi 
            </Link>
          </li>
          {/* <li className='ml-96'>
            <a>
              <AiOutlineSearch className='h-5 w-5' />
            </a>
          </li> */}
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
                <div className='ml-4'>
                <Image src={logo}  width={100} height={100} alt='ini-logo'/>
            </div>
            <div>
              <li>
                    <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    Beranda
                    </Link>
                </li>
              <div className="ml-4 dropdown dropdown-hover flex font-mono">
                    <label tabIndex={0} className="flex items-center space-x-2"><div className='mr-2'><MdCorporateFare className='h-10 w-10' /></div> Profile <AiOutlineDownCircle /></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/home/profile">Sekilas Pandang</Link></li>
                    <li><Link href="/home/visi-misi">Visi Misi</Link></li>
                    <li><Link href="/home/struktur-organisasi">Struktur Organisasi</Link></li>
                    </ul>
                </div>
                <li>
                    <Link href="/home/dokumen">
                    <HiDocumentDuplicate className='h-10 w-10' />
                    Data Dokumen
                    </Link>
                 </li>
                 <div className="ml-4 dropdown dropdown-hover flex items-center font-mono">
                    <label tabIndex={0} className="flex items-center space-x-2"><div className='mr-2'><MdPublic className='h-10 w-10' /></div> Layanan Public <AiOutlineDownCircle /></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72">
                    <li><a href='https://pajakonline.pangkalpinangkota.go.id'>Pajak Online Pangkalpinang</a></li>
                    <li><a href='https://cekpbb.pangkalpinangkota.go.id'>Cek Pajak Bumi dan Bangunan</a></li>
                    </ul>
                </div>
                 <li>
                    <Link href="/home/Regulasi">
                    <AiFillFile className='h-10 w-10' />
                    Regulasi
                    </Link>
                </li>
                <li>
                    <Link href="/home/transparansi">
                    <FcDocument className='h-10 w-10' />
                    Transparansi PKD
                    </Link>
                </li>
            </div>
              </ul>
            </div>
          </div>

        </div>
        <div className="drawer-side z-40">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <div className='ml-4'>
                <Image src={logo}  width={100} height={100} alt='ini-logo'/>
            </div>
            <div>
              <li>
                    <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    Beranda
                    </Link>
                </li>
              <div className="ml-4 dropdown dropdown-hover flex font-mono">
                    <label tabIndex={0} className="flex items-center space-x-2"><div className='mr-2'><MdCorporateFare className='h-10 w-10' /></div> Profile <AiOutlineDownCircle /></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/home/profile">Sekilas Pandang</Link></li>
                    <li><Link href="/home/visi-misi">Visi Misi</Link></li>
                    <li><Link href="/home/struktur-organisasi">Struktur Organisasi</Link></li>
                    </ul>
                </div>
                <li>
                    <Link href="/home/dokumen">
                    <HiDocumentDuplicate className='h-10 w-10' />
                    Data Dokumen
                    </Link>
                 </li>
                 <div className="ml-4 dropdown dropdown-hover flex items-center font-mono">
                    <label tabIndex={0} className="flex items-center space-x-2"><div className='mr-2'><MdPublic className='h-10 w-10' /></div> Layanan Public <AiOutlineDownCircle /></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72">
                    <li><a href='https://pajakonline.pangkalpinangkota.go.id'>Pajak Online Pangkalpinang</a></li>
                    <li><a href='https://cekpbb.pangkalpinangkota.go.id'>Cek Pajak Bumi dan Bangunan</a></li>
                    </ul>
                </div>
                 <li>
                    <Link href="/home/Regulasi">
                    <AiFillFile className='h-10 w-10' />
                    Regulasi
                    </Link>
                </li>
                <li>
                    <Link href="/home/transparansi">
                    <FcDocument className='h-10 w-10' />
                    Transparansi PKD
                    </Link>
                </li>
                
            </div>
            
          </ul>

        </div>
      </div>

</>
  )
}
 
export default ViewMenu