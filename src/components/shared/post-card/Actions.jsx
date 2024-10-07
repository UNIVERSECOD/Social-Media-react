import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit2Icon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import { useDialog } from "@/hooks/useDialog";
import { MODAL_TYPE } from "@/constants";

export const PostCardAction = ({post}) => {
    const {setIsOpen} = useDialog()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="text-gray-500 cursor-pointer">
          <button className="hover:bg-gray-50 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="7" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="17" r="1" />
            </svg>
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem 
        onClick={()=>{
            setIsOpen(true, MODAL_TYPE.EDIT, post)
        }}
        className="flex gap-3 items-center">
          <Edit2Icon className="h-4 w-4" />
          <p>Edit</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-3 items-center">
          <TrashIcon className="h-4 w-4" />
          <p>Delete</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// 31:24 