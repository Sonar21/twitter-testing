import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";


export default async function Home() {
  return (
    <div className="max-w-xl mx-auto min-h-screen">
      <div className="">
        <PostForm/>
      </div>
      <PostList/>
       </div>
    
  )
}
