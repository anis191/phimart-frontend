import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://phimart-ecommerce-wheat.vercel.app/api/v1",
});

export default apiClient;