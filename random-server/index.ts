import axios from "axios"

const backend = axios.create({
    timeout: 10000,
    baseURL: "http://localhost:3000/",
});

backend.interceptors.request.use(function (config) {
    let finalRequest = config;
    finalRequest.data = {
        username: "rajesh balu",
        password: "i wont tell my password"
    }
    config.timeout = 10;
    config.url = "/user";
    config.method = "get";
    return finalRequest;
}, function (error) {
    // console.log(error);
    return Promise.reject("there occured an error");
});

backend.interceptors.response.use(function (response) {
    return response.data
}, function (err) {
    return Promise.reject("error occurred");
});

async function main() {
    try {
        const res = await backend({
            url: "/user",
            method: "get",
            data: {
                username: "devarshi",
                email: "devarshi@gmail.com"
            },
            headers: {
                Authorization: "some random token"
            }
        });
        console.log(res);
        console.log(res.statusText);
        console.log(res.headers);
        console.log(res.config.data);
    } catch (err: any) {
        const res = err
        console.log(typeof (res));
        console.log(err);
    }
};


main();
