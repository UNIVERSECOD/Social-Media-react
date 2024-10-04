import { BASE_URL } from "@/constants";
import axios from "axios";

export async function getPosts({pageParam}) {
    try {
       console.log(pageParam);
       
        const response =await axios(`${BASE_URL}/posts?page=${pageParam}`);
        return response.data;
    }catch(error){
        console.error(error);
        return {}
    }
}