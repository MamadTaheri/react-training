import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID aMyK-ZH6NfTmy2CgDqx6UTYslgSS1577asIuQZr0vVs'
    }
})