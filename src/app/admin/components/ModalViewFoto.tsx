"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

interface Ipost {
  id: number;
  judul: string;
  descrip: string;
  name: string;
  tanggal: string;
  image: string;
  url: string;
}

//  async function handleView(postUrl: number) {
//         console.log(postUrl);
//         const res = await fetch(`http://localhost:5000/dokper/${postUrl}`, { cache: 'no-store' });
//         const posts: Ipost[] = await res.json();
//         console.log(posts);
//         return posts;

// }

const ViewFotoBerita = (post: Ipost) => {
  console.log(post.url);

  const [modal, setModal] = useState(false);

  const router = useRouter();

  // async function handleView(e: SyntheticEvent) {
  //     e.preventDefault()

  //     await fetch(`http://localhost:5000/dokper/${post.id}`)

  //     router.refresh();
  //     setModal(false)

  // }

  function handelChange() {
    setModal(!modal);
  }
  return (
    <>
      {/* The button to open modal */}
      {/* <label htmlFor="my_modal_6" onClick={()=> handleView(post.id)} className="btn btn-xs btn-outline btn-accent">view</label> */}
      <button
        className="btn btn-xs btn-outline btn-accent"
        onClick={handelChange}>
        View
      </button>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        checked={modal}
        onChange={handelChange}
        id="my_modal_6"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl justify-center">
          <div className="flex justify-end sticky top-0">
            <button
              className="btn btn-active btn-xs btn-outline btn-secondary mb-4"
              onClick={handelChange}>
              X
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              alt="poto"
              src={post.url}
              width={200}
              height={200} // You can adjust the height as needed
            />
          </div>
        </div>
      </div>

      {/* <dialog className="modal">
    <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Click the button below to close</p>
        <div className="modal-action">
        <form method="dialog">
            <button className="btn">Close</button>
        </form>
        </div>
    </div>
    </dialog> */}
    </>
  );
};

export default ViewFotoBerita;
