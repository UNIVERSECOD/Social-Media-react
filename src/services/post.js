import { BASE_URL } from "@/constants";
import axios from "axios";

export async function getPosts() {
    try {
        const data =await axios(`${BASE_URL}`/posts)
        return data 
    }catch(error){
        console.error(error);
        return {}
    }
}