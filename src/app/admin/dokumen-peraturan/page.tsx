"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import ViewPdf from "../components/ModalViewPdf";
import ModalPostDokpera from "./ModalPost";
import ModalEditDokpera from "./ModalEdt";
import ModalHapusdokpera from "./ModalHapus";

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
      fetch(`https://lab.dima-dan-rendy.shop/dokpera`, {
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
      <div className="flex">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
                Documents Peraturan
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <ModalPostDokpera />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ModalPostDokpera />
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
                    <ModalEditDokpera {...results} />
                    <ModalHapusdokpera {...results} />
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
