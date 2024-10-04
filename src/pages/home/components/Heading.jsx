import CreatePostDialog from '@/components/shared/create-post-dialog';
import { POST_QUERY_KEY } from '@/constants/query-keys';
import { getPosts } from '@/services/post';
import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react'

const Heading = () => {
  const {data} = useInfiniteQuery({
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


  const total = data?.pages?.[0].total ?? 0 
  return (
    <div className='flex justify-between items-center'>
      <h1 className='font-bold text-muted-foreground text-3xl tracking-widest'>Posts</h1>
      <div>
<p className='text-xs'>
  Total Posts: {" "}
  <span className='font-semibold text-muted-foreground'>{total}</span>
</p>        <CreatePostDialog />
      </div>
    </div>
  )
}

export default Heading
