import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { dislikePost, likePost } from "@/services/post";

const LikePost = ({ liked, postId}) => {
    const [isLiked, setIsLiked] = useState(liked) //state tanimla listimden gelen isLiked istifade ele 
    const {mutate, isPending, data} = useMutation({
        mutationFn: isLiked ? dislikePost : likePost,  
    })

    
function handleLikeClick () {
    mutate({id: postId})                  // Mutate (request gonderdi) eledi
}
useEffect(() =>{
    setIsLiked(data?.liked ?? liked)
},[data])                                         //cavabda liked tru gelirse true flase gelirse false


// const isLiked = data?. liked ?? liked //datadan like datasi varsa onu istifade ele yoxdusa cavab mutation yoxdusa like istifade ele
  return (
    <button 
    disabled={isPending}
    onClick={handleLikeClick} 
    className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
      <svg
        className={cn("w-5 h-5 fill-current", isLiked ? "fill-red-500" : "")}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
}

export default LikePost;
