import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Data = {
  id: number;
  judul: string;
  descrip: string;
  tanggal: string;
  image: string;
  url: string;
};

function ModalHapusBeritaNews(post: Data) {
  const [modal, setModal] = useState(false);

  const { data }: any = useSession();
  const uuid = data?.user?.uuid;

  const router = useRouter();

  const handleSubmit = async (id: number) => {
    try {
      // Send the form data to your server's API endpoint using a fetch or axios.
      const response = await fetch(
        `https://lab.dima-dan-rendy.shop/bernews/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `${uuid}`,
          },
        }
      );

      if (response.ok) {
        // Handle the successful response from the server.
        location.reload();
        setModal(false);
      } else {
        // Handle the error response from the server.
        console.error("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  function handelChange() {
    setModal(!modal);
  }
  return (
    <>
      <button
        className="btn btn-xs btn-outline btn-error"
        onClick={handelChange}>
        Hapus
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handelChange}
        id="my_modal_6"
        className="modal-toggle"
      />
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hapus...!</h3>
          <p className="py-4">Apakah anda yakin akan menghapus....?</p>
          <div className="modal-action">
            <form method="dialog" className="space-x-2">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handelChange} className="btn btn-xs btn-error">
                No
              </button>
              <button
                onClick={() => handleSubmit(post.id)}
                className="btn btn-xs btn-success">
                Yes
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ModalHapusBeritaNews;
