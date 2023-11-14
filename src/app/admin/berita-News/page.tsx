"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import PostBeritaNews from "./ModalPost";
import EditBeritaNews from "./ModalEdit";
import ModalHapusBeritaNews from "./ModalHapus";
import ViewFotoBerita from "../components/ModalViewFoto";

interface Ipost {
  id: number;
  judul: string;
  name: string;
  descrip: string;
  tanggal: string;
  image: string;
  url: string;
}

export default function BeritaNews() {
  const [result, setResult] = useState([]);
  const { data }: any = useSession();
  const uuid = data?.user?.uuid;
  useEffect(() => {
    if (uuid) {
      fetch(`https://lab.dima-dan-rendy.shop/bernews`, {
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
  return (
    <>
      <div>
        <PostBeritaNews />
      </div>
      <div className="mr-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Deskripsi</th>
                <th>Tanggal</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            {result.map((post: Ipost, i) => (
              <tbody key={post.id}>
                <tr>
                  <th>{i + 1}</th>
                  <td>{post.judul}</td>
                  <td>{post.descrip}</td>
                  <td>{post.tanggal}</td>
                  <td>
                    <ViewFotoBerita {...post} />
                  </td>
                  <td>
                    <EditBeritaNews {...post} />
                    <ModalHapusBeritaNews {...post} />
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
