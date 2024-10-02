import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import PostsWrapper from "./components/PostsWrapper";
import PostCard from "@/components/shared/post-card";


const HomePage = () => {


  return (
    <div className="mx-auto max-w-screen-lg px-4  md:px-10 py-10 bg-gray-100">
     <Heading />
     <PostsWrapper> 
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
     </PostsWrapper>
    </div>
  );
};

export default HomePage;
