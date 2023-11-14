"use client";
import { useEffect, useState } from "react";
import PDFViewerDownload from "../pdf/pdfViewDownload";

interface Ipost {
  id: number;
  judul: string;
  file: string;
  url: string;
}

const DokPera = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Use the useEffect hook to fetch data when the component mounts

  //   // Define an async function to fetch data
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://lab.dima-dan-rendy.shop/dokpera",
  //         {
  //           cache: "no-store",
  //         }
  //       );
  //       // Replace with your API route
  //       if (response.ok) {
  //         const data = await response.json();
  //         setData(data);
  //       } else {
  //         console.error("Failed to fetch data");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData(); // Call the fetchData function
  // }, []);

  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(`https://lab.dima-dan-rendy.shop/dokpera`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  }, []);

  return (
    <>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Dokumen Peraturan
        </div>
        <div className="collapse-content">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Judul</th>
                  <th>Tanggal</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {result.map((post: Ipost, i) => (
                  <tr key={post.id}>
                    <th>{i + 1}</th>
                    <td>{post.judul}</td>
                    <td>{post.file}</td>
                    <td>
                      <PDFViewerDownload {...post} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DokPera;
