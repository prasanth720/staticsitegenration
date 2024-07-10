import { Inter } from "next/font/google";
import Head from "next/head";

import styles from "../styles/home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
export async function getStaticProps(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return {
    props:{
      posts: await response.json()
    }
  }
}
export default function Home({posts}) {
console.log(posts)
  return (
    <>
   <div className={styles.container} >
    <Head>
      <title>Posts lists</title>
    </Head>
    <h2 className="text-zinc-900">Posts Lists</h2>
    <div className={styles.grid}> 
      {posts.map((post)=>(
       <div className={styles.card} key={post.id}>
        <Link href={`/postdata/${post.id}`}>
        <h2>{post.id}</h2>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              
            </Link>
       
       </div>
      ))}
    </div>
   </div>
   </>
  );
}
