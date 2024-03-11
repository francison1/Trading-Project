import axios from "axios";

const TOKEN = "ce7nlqaad3i4pjr4o6v0ce7nlqaad3i4pjr4o6vg"

export default axios.create({
    baseURL:"https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})