"use client";
import { useSession } from "next-auth/react";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { cookies } from "next/headers";
import ModalUser from "./ModalUser";
import ModalUserEdit from "./ModalUserEdit";
import ModalUserHapus from "./ModalHapusUser";

interface Ipost {
  uuid: string;
  name: string;
  email: string;
  role: string;
}

export default function ListUser() {
  const { data }: any = useSession();
  const uuid = data?.user?.uuid;

  const [result, setResult] = useState([]);

  // useEffect(() => {
  //     fetch('http://localhost:5000/users',{
  //       headers: {
  //         Authorization: `Bearer ${uuid}`
  //       }
  //     })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setResult(data);
  //     })
  // },[])

  useEffect(() => {
    if (uuid) {
      fetch(`https://lab.dima-dan-rendy.shop/users`, {
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
      <div className="mt-2">
        <ModalUser />
      </div>

      <div className="mr-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            {result.map((post: Ipost, i) => (
              <tbody key={post.uuid}>
                <tr>
                  <th>{i + 1}</th>
                  <th>{post.name}</th>
                  <td>{post.email}</td>
                  <td>{post.role}</td>
                  <td>
                    <ModalUserEdit {...post} />
                    <ModalUserHapus {...post} />
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
