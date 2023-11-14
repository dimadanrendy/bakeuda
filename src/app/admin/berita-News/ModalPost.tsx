import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

function PostBeritaNews() {
  const [modal, setModal] = useState(false);
  const [judul, setJudul] = useState<string>("");
  const [descrip, setDescrip] = useState<string>("");
  const [tanggal, setTanggal] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const { data }: any = useSession();
  const uuid = data?.user?.uuid;

  const router = useRouter();

  const handleJudulChange = (event: ChangeEvent<HTMLInputElement>) => {
    setJudul(event.target.value);
  };

  const handleDescripChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescrip(event.target.value);
  };

  const handleTanggalChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTanggal(event.target.value);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!judul || !file || !descrip || !tanggal) {
      alert("Please provide a title and select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("descrip", descrip);
    formData.append("tanggal", tanggal);
    formData.append("photo", file);

    try {
      // Send the form data to your server's API endpoint using a fetch or axios.
      const response = await axios.post(
        `https://lab.dima-dan-rendy.shop/bernews`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${uuid}`,
          },
        }
      );

      if (response) {
        // Handle the successful response from the server.
        console.log("Data submitted successfully.");
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
        className="btn btn-xs btn-outline btn-accent"
        onClick={handelChange}>
        + Tambah Berita
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handelChange}
        id="my_modal_6"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-middle ">
          <div className="flex justify-end sticky top-0">
            <button
              className="btn btn-active btn-xs btn-outline btn-secondary mb-4"
              onClick={handelChange}>
              X
            </button>
          </div>
          {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <label  className="block text-gray-700 text-sm font-bold mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label  className="block text-gray-700 text-sm font-bold mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label  className="block text-gray-700 text-sm font-bold mb-2">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label >
          Konfirmasi Password:
          <input
            type="password"
            name="confPassword"
            value={formData.confPassword}
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form> */}
          <div className="w-full max-w-7xl">
            <form
              className="bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Judul
                  <input
                    type="text"
                    name="name"
                    value={judul}
                    onChange={handleJudulChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Deskripsi
                  <textarea
                    name="descrip"
                    value={descrip}
                    onChange={handleDescripChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tanggal
                  <input
                    type="date"
                    name="tanggal"
                    value={tanggal}
                    onChange={handleTanggalChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Dokumen
                  <input
                    type="file"
                    name="file"
                    accept=".jpg, .jpeg, .png, .pdf"
                    onChange={handleFileChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Role
            <input 
            type="text"  
            name="role"
            value={formData.role}
            onChange={handleChange} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </label>
            </div> */}
              {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Role
            </label>
            <div className="relative">
                <select name='role' value={formData.role} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="admin">Admin</option>
                <option value="user">User</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            </div> */}
              {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
            <input 
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            name='password'
            value={formData.password}
            onChange={handleChange}
            type="password" 
            placeholder="******************" />
            </label>
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
                Konfirmasi Password
            <input 
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            name='confPassword'
            value={formData.confPassword}
            onChange={handleChange}
            type="password" 
            placeholder="******************" />
            </label>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div> */}
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostBeritaNews;
