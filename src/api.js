import axios from "axios"
import env from "react-dotenv";



const api =axios.create({
    //baseurl is required
    //baseURL:`{$process.env.REACT_APP_API_URL}`
    baseURL:`localhost:3008/api/`,
    
});
export default api;