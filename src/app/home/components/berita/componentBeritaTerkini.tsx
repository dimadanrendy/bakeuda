"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Ipost {
  id: number;
  judul: string;
  descrip: string;
  image: string;
  url: string;
}

export default function ComponentBeritaTerkini() {
  // const res = await fetch('/api/berita/beritaterkini', { cache: 'no-store' });
  // const posts: Ipost[] = await res.json();

  // console.log(posts);

  //  const [data, setData] = useState([]);

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
    <>
      <div>
        <h1>
          <a className="font-extrabold">BERITA TERKINI</a>
        </h1>
        <div className="mr-40">
          <progress
            className="progress progress-info w-96"
            value="70"
            max="100"></progress>
        </div>
      </div>
      <div data-aos="zoom-in" className="mt-5">
        {result.map((post: Ipost) => (
          <>
            <div key={post.id}>
              <Image
                width={200}
                height={200}
                className="rounded"
                src={post.url}
                alt="Shoes"
                data-aos="zoom-in"
              />
              <span className="px-8 mt-3 -mb-4">gambar Hari, 07 mei 2000</span>
              <h1 className="px-8 mt-1 mb-4">INI ADALAH JUDUL</h1>
              <div>
                <h2>{post.judul}</h2>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* <div className="card w-96 glass">
                    {posts.map((post) => (
                        <>
                    <figure><img src={post.url} alt="Shoes"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                    </>
                     ))}
                </div> */}
    </>
  );
}
