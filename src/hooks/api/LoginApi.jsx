import axios from "axios";

const LoginApi = () => {
    return (
        axios.post("http://localhost:8090/login",
            {username: localStorage.getItem("username"), password: localStorage.getItem("password")})
            .then((response) => {
            localStorage.setItem("Authorization", response.headers["authorization"])
            return response
        }).catch((error) => {
            return error.response;
        })
    )
}

export default LoginApi;