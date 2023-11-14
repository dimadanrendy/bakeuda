import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BAKEUDA - Visi Misi',
}

export default function VisiMisi() {
  return (
    <div className='mb-20'>
      <div className='text-center mt-8' >
        <h1 className='text-4xl font-mono font-extrabold' >VISI MISI</h1>
        <progress className="progress w-56" value="100" max="100"></progress>
      </div>
    <hr />
      <div className='px-16'>
        <div className=' text-start mt-8' >
          <h1 className='text-2xl font-mono font-extrabold' >VISI</h1>
        </div>
        <div>
          <p className=" text-start">
            Visi pembangunan jangka menengah daerah Kota Pangkalpinang Tahun 2018-2023 disesuaikan dengan visi Walikota terpilih yaitu:
          </p>
          <p className=" text-start">
            “ Mewujudkan Pangkalpinang sebagai Pangkalpinang Kota SENYUM “
          </p>
        </div>
        <div className=' text-start mt-8' >
          <h1 className='text-2xl font-mono font-extrabold' >MISI</h1>
        </div>
        <div>
          <p className='indent-8 text-start'>
            1. Meningkatkan pemanfaatan potensi ekonomi dan penanggulangan kemiskinan.
          </p>
          <p className='indent-8 text-start'>
            2. Meningkatkan kualitas keamanan ketertiban, perlindungan masyarakat dan peningkatan kesiapsiagaan dalam menghadapi bencana.
          </p>
          <p className='indent-8 text-start'>
            3. Meningkatkan tata kelola pemerintahan yang baik, menuju tercapainya Good Governance.
          </p>
          <p className='indent-8 text-start'>
            4. Meningkatkan kualitas pembangunan sumberdaya manusia yang berkeadilan.
          </p>
          <p className='indent-8 text-start'>
            5. Meningkatkan kualitas infrastruktur dan pengelolaan lingkungan hidup.
          </p>
        </div>
      </div>
    </div>
  )
}
