import axios from 'axios';

export const currencyapi = ()=>{
    return axios.create({
        baseURL:'https://api.apilayer.com/exchangerates_data/'
    })
}
