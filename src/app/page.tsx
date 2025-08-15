import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { useAuth } from "@clerk/nextjs";


export default async function Home() {
  const {userId} =useAuth();
  return (
    <div className="max-w-xl mx-auto min-h-screen">
      <div className="">
        <PostForm/>
      </div>
      <PostList/>
       </div>
    
  )
}
