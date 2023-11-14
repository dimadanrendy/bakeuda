"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import ViewPdf from "../components/ModalViewPdf";
import ModalPostDokper from "./ModalPost";
import ModalEditDokper from "./ModalEdit";
import ModalHapusdokper from "./ModalHapus";

type Data = {
  id: number;
  judul: string;
  file: string;
  tanggal: string;
  url: string;
};

export default function TransparansiPKD() {
  const [result, setResult] = useState([]);
  const { data }: any = useSession();
  const uuid = data?.user?.uuid;

  useEffect(() => {
    if (uuid) {
      fetch(`https://lab.dima-dan-rendy.shop/dokper`, {
        // assign the token as bearer token on your request headers
        headers: {
          Authorization: `${uuid}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setResult(data);
        });
    }
  }, [uuid]);

  console.log(result);

  return (
    <>
      <div>
        <ModalPostDokper />
      </div>
      <div className="mr-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Tanggal</th>
                <th>Action</th>
              </tr>
            </thead>
            {result.map((results: Data, i) => (
              <tbody key={results.id}>
                <tr>
                  <th>{i + 1}</th>
                  <th>{results.judul}</th>
                  <td>{results.tanggal}</td>
                  <td>
                    <ViewPdf {...results} />
                    <ModalEditDokper {...results} />
                    <ModalHapusdokper {...results} />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
