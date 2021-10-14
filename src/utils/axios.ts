import axios from 'axios'

const api = axios.create({
    baseURL: 'https://to-do-app-da5ab-default-rtdb.firebaseio.com'

})

export {api}