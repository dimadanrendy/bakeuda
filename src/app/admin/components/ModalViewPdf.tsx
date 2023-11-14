"use client";
import { useState } from "react";

type Data = {
  id: number;
  judul: string;
  file: string;
  tanggal: string;
  url: string;
};

//  async function handleView(postUrl: number) {
//         console.log(postUrl);
//         const res = await fetch(`http://localhost:5000/dokper/${postUrl}`, { cache: 'no-store' });
//         const posts: Ipost[] = await res.json();
//         console.log(posts);
//         return posts;

// }

const ViewPdf = (post: Data) => {
  const [modal, setModal] = useState(false);

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
        <div className="modal-middle w-10/12">
          <div className="flex justify-end sticky top-0">
            <button
              className="btn btn-active btn-xs btn-outline btn-secondary mb-4"
              onClick={handelChange}>
              X
            </button>
          </div>
          <div className="grid justify-items-center mt-5">
            <iframe
              src={post.url}
              title="PDF Viewer"
              width="80%"
              height="700px" // You can adjust the height as needed
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPdf;
