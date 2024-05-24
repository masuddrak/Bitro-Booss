import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const AxiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})
const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const naviget = useNavigate()
    AxiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        // console.log("hite interceptor now")
        const token = localStorage.getItem("access_token")
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    AxiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, async (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const errorStatus = error.response.status
        if (errorStatus === 401 || errorStatus === 403) {
            await logOut()
            naviget("/login")
        }

        return Promise.reject(error);
    });


    return AxiosSecure
};

export default useAxiosSecure;