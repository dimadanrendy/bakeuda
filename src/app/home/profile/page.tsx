import type { Metadata } from 'next'
import Image from 'next/image'
import kantor from '../../../../public/foto2.jpg'
import PDFViewer from '../components/pdf/pdfView'

export const metadata: Metadata = {
  title: 'BAKEUDA - Profile',
}


const Profile = () => {
  return (
    <>
    <div className='text-center mt-5' >
      <h1 className='text-4xl font-mono font-extrabold' >PROFILE</h1>
      <progress className="progress w-56" value="100" max="100"></progress>
    </div>
    <div className='items-center grid justify-items-center mt-5' >
      <Image
      src={kantor}
      alt="Picture of the author"
      width={500} 
      height={500} 
      // blurDataURL="data:..." 
      // placeholder="blur" // Optional blur-up while loading
    />
    </div>

    <PDFViewer/>
    </>
  )
}

export default Profile
