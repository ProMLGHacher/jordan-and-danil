import axios from "axios";

export const $api = axios.create({
    baseURL: 'https://0435-176-28-64-201.ngrok-free.app/api/'
});
