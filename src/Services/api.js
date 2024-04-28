import axios from 'axios'


const apiLocal = axios.create({
    baseURL:'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1',
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/json',
    }
})
export default apiLocal