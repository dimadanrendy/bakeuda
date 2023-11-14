"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Ipost {
  id: number;
  judul: string;
  file: string;
  url: string;
}

//  async function handleView(postUrl: number) {
//         console.log(postUrl);
//         const res = await fetch(`http://localhost:5000/dokper/${postUrl}`, { cache: 'no-store' });
//         const posts: Ipost[] = await res.json();
//         console.log(posts);
//         return posts;

// }

const PDFViewerDownload = (post: Ipost) => {
  console.log(post.id);
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
    console.log(post.url);
  }
  return (
    <>
      {/* The button to open modal */}
      {/* <label htmlFor="my_modal_6" onClick={()=> handleView(post.id)} className="btn btn-xs btn-outline btn-accent">view</label> */}
      <button
        className="btn btn-xs btn-outline btn-accent"
        onClick={handelChange}>
        Lihat
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

          <iframe
            src={post.url}
            title="PDF Viewer"
            width="100%"
            height="680px" // You can adjust the height as needed
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default PDFViewerDownload;
