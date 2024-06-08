import axios from "axios";

const PROXY_API_ENDPOINT = "/.netlify/functions/fetch-api";

export const fetchAllCountries = async ()=>{
    try {
        const response = await axios.get(`${PROXY_API_ENDPOINT}`);
        return response.data
    }
    catch(error){
        console.log("Error in fetching", error)
    }
}