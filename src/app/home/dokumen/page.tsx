
import type { Metadata } from "next"

export const metadata:Metadata = {
    title: "BAKEUDA - Dokumen"
}

import DokPer from "../components/dokumen/dokPer"
import DokPera from "../components/dokumen/dokPera"


const Dokumen = async() => {
  return(
    <>
    <div className="px-16 py-10">
    <DokPer/>
    <DokPera/>
    </div>
    </>
  )

}

export default Dokumen;