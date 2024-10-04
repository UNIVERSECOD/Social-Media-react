import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Heading from "./components/Heading";
import PostsWrapper from "./components/PostsWrapper";
import PostCard from "@/components/shared/post-card";
import { POST_QUERY_KEY } from "@/constants/query-keys";
import { getPosts } from "@/services/post";
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const HomePage = () => {
  // const queryClient = useQueryClient()

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [POST_QUERY_KEY],
    queryFn: getPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages, lastPageParam) => {
      console.log(lastPage);
      const { total, page, limit } = lastPage;
      const hasMore = total > page * limit;
      return hasMore ? page + 1 : undefined;
    },
  });
  // const {page} = data sehvdi chunki ilk defe render gedende undefined olur
console.log("isLoading", isLoading, "isFetching", isFetching, "fetching next page", isFetchingNextPage);

  const { pages, pageParams } = data ?? {};

  if (isError) {
    return <div> Error: {error.message}</div>;
  }

  return (
    <div className="mx-auto max-w-screen-lg px-4  md:px-10 py-10 bg-gray-100">
      <Heading  />
      <PostsWrapper>
        {pages &&
          pages.map((page) =>
            page.data.map((post) => <PostCard post={post} key={post.id} />)
          )}
        {isLoading && (
          <>
            <PostCard.Skeleton />
            <PostCard.Skeleton />
          </>
        )}
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </PostsWrapper>
    </div>
  );
};

export default HomePage;
