import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=intitle:"

const googleAPI = {
    search: function(query){
        return axios.get(BASEURL + query);
    }
}

export default googleAPI;