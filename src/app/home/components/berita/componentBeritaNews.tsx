"use cilent";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Ipost {
  id: number;
  judul: string;
  descrip: string;
  tanggal: string;
  image: string;
  url: string;
}
export default function ComponentBeritaNews() {
  // const res = await fetch('/api/berita/beritanews', { cache: 'no-store' });
  // const posts: Ipost[] = await res.json();
  // console.log(posts);

  //   const [data, setData] = useState([]);

  //  useEffect(() => {

  //    const fetchData = async () => {
  //      try {
  //        const response = await fetch('/api/berita/beritanews', {cache: 'no-store'});

  //        if (response.ok) {
  //          const data = await response.json();
  //          setData(data);
  //        } else {
  //          console.error('Failed to fetch data');
  //        }
  //      } catch (error) {
  //        console.error('Error fetching data:', error);
  //      }
  //    };

  //    fetchData();
  //  }, []);

  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(`https://lab.dima-dan-rendy.shop/bernews`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>
          <a className="font-extrabold">NEWS</a>
        </h1>
        <div className="mr-40">
          <progress
            className="progress progress-info w-52"
            value="40"
            max="100"></progress>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl mt-5 mb-2 ">
        {result.map((post: Ipost) => (
          <>
            {console.log(post.url)}
            <div key={post.id}>
              <figure>
                <Image width={300} height={300} src={post.url} alt="Shoes" />
              </figure>
              <span className="px-8 mt-3 -mb-4">{post.tanggal}</span>
              <div className="card-body">
                <h2 className="card-title">{post.judul}</h2>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
