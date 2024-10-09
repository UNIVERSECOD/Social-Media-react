import React from 'react'
import { UserCircle2 } from 'lucide-react';

const PostComments = ({comments}) => {
  return (
    <div>
          <hr className="mt-2 mb-2" />
            <p className="text-gray-800 font-semibold">Comment</p>
            <hr className="mt-2 mb-2"/>
      <div className="mt-4">
                
                <div className="flex items-center space-x-2">
                    <UserCircle2 className='w-8 h-8'/>
                    <div>
                        <p className="text-gray-800 font-semibold">Jane Smith</p>
                        <p className="text-gray-500 text-sm">Lovely shot! 📸</p>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default PostComments
