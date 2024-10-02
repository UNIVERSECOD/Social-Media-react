import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import PostsWrapper from "./components/PostsWrapper";
import PostCard from "@/components/shared/post-card";
import { POST_QUERY_KEY } from "@/constants/query-keys";
import { getPosts } from "@/services/post";
import { useQuery, useQueryClient } from "@tanstack/react-query";


const HomePage = () => {
  // const queryClient = useQueryClient()

  const {data, isLoading, isError} = useQuery({
    queryKey: [POST_QUERY_KEY],
     queryFn: getPosts 
    })

    console.log(data);

    // const {page} = data sehvdi chunki ilk defe render gedende undefined olur

    const {data: posts, total, page, limit} = data ?? {}
    

  return (
    <div className="mx-auto max-w-screen-lg px-4  md:px-10 py-10 bg-gray-100">
     <Heading />
     <PostsWrapper> 
      {
        data && 
        posts.map((post) => 
          <PostCard post={post} key={post.id} />
        )
      }
     <PostCard />
      {isLoading && 
      <>
      <PostCard.Skeleton />     
      <PostCard.Skeleton />   
      </>
      }
     </PostsWrapper>
    </div>
  );
};

export default HomePage;
