
import type { Metadata } from "next"
import TransparansiPAD from "../components/transparansi/transparansiPAD";
import TransparansiPKD from "../components/transparansi/transparansiPKD";

export const metadata:Metadata = {
    title: "BAKEUDA - Transparansi"
}




const Transparansi = async() => {
  return(
    <>
    <div className="px-16 py-10">
      <TransparansiPAD/>
      <TransparansiPKD/>
    </div>
    </>
  )

}

export default Transparansi;