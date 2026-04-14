import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    // baseURL: "https://image.tmdb.org/t/p/original/",
})

export default instance;