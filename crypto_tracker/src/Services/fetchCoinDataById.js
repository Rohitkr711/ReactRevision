import { axiosInstance } from "../Helpers/axiosInstance";

let count=0;
export async function fetchCoinDataById(id,currency='usd'){

    console.log("coindata Id called");
    
    try {
        const response = await axiosInstance.get(`/coins/${id}?vs_currency=${currency}`);
        console.log('Response',count,response.data);
        ++count;
        return response.data;
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
}