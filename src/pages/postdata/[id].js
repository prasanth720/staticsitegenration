import { useRouter } from "next/router";
import Link from "next/link";

export async function getStaticPaths(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/")
  const posts = await res.json();
  return {
    paths: posts.map((post)=>({
      params: {id:post.id.toString()},
    })),
    fallback:false
  }
}
export async function getStaticProps({params}){
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  return{
    props: {
      posts: await response.json()
    }
}
}
export default function Details({posts}) {
 
  return (
    <>
    <div>
        <Link href="/">
       Back to Home</Link>
    </div>

      <div>{JSON.stringify(posts)}</div>
    </>
  );
}
