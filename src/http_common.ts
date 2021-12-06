import axios from "axios";

export default axios.create({
    baseURL: "http://phplaravel:8000/",
    headers: {
        "Content-type": "application/json"
    }
});