import Image from "next/image";
import { useEffect, useState } from "react";

interface Ipost {
  id: number,
  name: string,
  image: string
  url: string
}

export default function CardList() {
  //  const res = await fetch('/api/berita/cardlist', { cache: 'no-store' });
  //  const posts: Ipost[] = await res.json();

   const [data, setData] = useState([]);

   useEffect(() => {
     // Use the useEffect hook to fetch data when the component mounts
 
     // Define an async function to fetch data
     const fetchData = async () => {
       try {
         const response = await fetch('/api/berita/cardlist', {cache: 'no-store'});
          // Replace with your API route
         if (response.ok) {
           const data = await response.json();
           setData(data);
         } else {
           console.error('Failed to fetch data');
         }
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
 
     fetchData(); // Call the fetchData function
 
   }, []); 
   
  return (
    <>
    <div className='px-24 mb-10'>
    {data.map((post: Ipost) => (
          <>
           <div key={post.id}>
            <div className=''>
            <Image width={200} height={200} className='rounded-md space-y-4' src={post.url} alt="Shoes"/>
            </div>
           </div>
          </>
        ))}
    </div>
    </>
  )
}
