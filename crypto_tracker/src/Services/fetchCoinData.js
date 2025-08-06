import { axiosInstance } from "../Helpers/axiosInstance";

let count=0;
export async function fetchCoinData(pageNo=1, currency='INR'){
    
    const perPageData=10;

    try {
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order&per_page=${perPageData}&page=${pageNo}`);
        console.log('Response',count,response);
        ++count;
        return response.data;
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
}