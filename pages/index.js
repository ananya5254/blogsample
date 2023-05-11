
import Navbar from "../components/Navbar";
 export default function Home({data})
 {
   return (  
      <><h1 className="heading">The Blog </h1><div className="grid grid-cols-3 gap-5 w-full">
       {data.map((post) => {
         <Link href={`/post-slug`}>
           <div className="cursor-pointer mb-10">
             <img className="mb-5 rounded-2xl w-full h-60 object-cover" src="img-url"></img>
             <h3 className="font-medium mb-3 text-xl">{post['title']['rendered']}</h3>
             <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: post['excerpt']['rendered'] }}></div>
           </div>
         </Link>;
       })}
     </div></>

    
   )
 }
 export async function getServerSideProps () {
  const getPosts = await fetch('http://headless.local/wp-json/wp/v2/post?_embed')
  const data = await getPosts.json();
  return {props: {data}}
 }
