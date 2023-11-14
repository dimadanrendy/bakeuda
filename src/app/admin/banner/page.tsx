"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import ViewFotoBerita from "../components/ModalViewFoto";
import EditBanner from "./ModalEdit";
import PostBanner from "./ModalPost";
import ModalHapusBanner from "./ModalHapus";

interface Ipost {
  id: number;
  name: string;
  judul: string;
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
      fetch(`https://lab.dima-dan-rendy.shop/banner`, {
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
        <PostBanner />
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
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            {result.map((post: Ipost, i) => (
              <tbody key={post.id}>
                <tr>
                  <th>{i + 1}</th>
                  <td>{post.name}</td>
                  <td>{post.tanggal}</td>
                  <td>
                    <ViewFotoBerita {...post} />
                  </td>
                  <td>
                    <EditBanner {...post} />
                    <ModalHapusBanner {...post} />
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
