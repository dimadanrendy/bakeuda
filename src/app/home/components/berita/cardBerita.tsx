import React from 'react'
import ComponentBeritaNews from './componentBeritaNews'
import ComponentBeritaTerkini from './componentBeritaTerkini'

export default function CardBerita() {
  return (
    <div className='px-24' data-aos="zoom-in">
        <div className="grid grid-cols-6 gap-2">
            <div className="col-start-1 col-span-4 flex flex-wrap space-x-5">
                <ComponentBeritaTerkini/>
            </div>
            
            <div className="col-start-5 col-span-2">
                <ComponentBeritaNews/>
            </div>
        </div>
    </div>
  )
}
