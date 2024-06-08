import axios from "axios";

const API_ENDPOINT = "https://restcountries.com/v3.1";

export const fetchAllCountries = async ()=>{
    try {
        const response = await axios.get(`${API_ENDPOINT}/all`);
        return response.data
    }
    catch(error){
        console.log("Error in fetching", error)
    }
}