import axios from 'axios'
import config from '../config/config.js';


const FetchDataFromApi = async (movieName, movieCount) => {

    // console.log(backendUrl, bearerToken)
    const backendUrl = config.backendUrl;
    const bearerToken = config.bearerToken;

    // edge cases
    if (movieName == "" || movieCount <= 0){
        console.log("Error : enter movie name and valid movie count");
        return {};
    }


    try {
        // Bearer token
        const token = String(import.meta.env.VITE_Bearer_Token);

        // request data
        const requestData = {
            "query": movieName,
            "number" : movieCount
        };

        // request headers
        const headers = {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json', 
        };

        // Make the POST request and await the response
        const response = await axios.post(backendUrl, requestData, { headers });
        
        return response.data; // Returning the response data

    } catch (error) {

        console.error("error", error);
        throw error; // Rethrow the error to handle it at a higher level
    }
}

export default FetchDataFromApi;
