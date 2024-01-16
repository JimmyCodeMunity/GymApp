import axios from 'axios'
import { rapidApiKey } from '../constants/Index'

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                'X-RapidAPI-Key': '0150760b80mshb71749a25f94c03p1dbeedjsnaaaea9804d17',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        }
        const response = await axios.request(options);
        return response.data;

    } catch (error) {
        console.log(error)

    }

}


export const fetchExcerciseByBodyPart = async(bodyPart) =>{
    let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
    return data;
}