import { BASE_URL } from "@/constants";
import axios from "axios";

export async function getPosts() {
    try {
        const response =await axios(`${BASE_URL}posts`)
        return response.data;
    }catch(error){
        console.error(error);
        return {}
    }
}