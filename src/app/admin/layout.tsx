import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar';
import ViewMenu from '../home/components/menu';
import Sidebar from './components/sidebar';
import ViewFooter from '../home/components/footer';
import AuthProvider from '../components/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BAKEUDA - Pangkalpinang',
  description: 'Badan Keuangan Daerah Kota Pangkalpinang',
}


type Props = {
  children: React.ReactNode,
  session: any
};

export default function RootLayoutAdmin({
  children,
  session
}:Props) {
  return (
    <html lang="en">
      <AuthProvider session={...session}>
        
      <body className={inter.className}>
      
       <div className='mb-20'>
            <Navbar/>
       </div>
       <div className='grid grid-cols-4'>
          <div>
            <Sidebar/>
          </div>
           
          <div className=' col-span-3'>
            {children}  
          </div>  
          
          <div className='col-span-4'>
           <ViewFooter/>
          </div>

        </div> 
      </body>
      </AuthProvider>
    </html>
  )
}
