import { BASE_URL } from "@/constants";
import axios from "axios";

export async function getPosts({pageParam}) {
    try {
        
        const response =await axios(`${BASE_URL}/posts?page=${pageParam}`);
        return response.data;
    }catch(error){
        console.error(error);
        return {}
    }
}

export async function createPosts({data}) {
   await new Promise((resolve) => setTimeout(resolve, 2000))
    try {
        const response =await axios.post(`${BASE_URL}/posts`, data);
        return response.data;
    }catch(error){
        console.error(error);
        return {}
    }
}

export async function editPosts({id, data}) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
     try {
         const response =await axios.put(`${BASE_URL}/posts/${id}`, data);
         return response.data;
     }catch(error){
         console.error(error);
         return {}
     }
 }

 export async function deletePost({id}) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
     try {
         const response =await axios.delete(`${BASE_URL}/posts/${id}`);
         return response.data;
     }catch(error){
         console.error(error);
         return {}
     }
 }

 export async function likePost({id}) {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
     try {
         const response =await axios.post(`${BASE_URL}/posts/${id}/like`);
         return response.data;
     }catch(error){
         console.error(error);
         return {}
     }
 }

 export async function dislikePost({id}) {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
     try {
         const response =await axios.post(`${BASE_URL}/posts/${id}/dislike`);
         return response.data;
     }catch(error){
         console.error(error);
         return {}
     }
 }

