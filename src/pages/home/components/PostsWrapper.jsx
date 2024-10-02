import React from 'react'

const PostsWrapper = ({children}) => {
  return (
    <div className='flex flex-col  gap-5 items-center bg-gray-100 py-4 pt-6'>
      {children}
    </div>
  )
}

export default PostsWrapper
