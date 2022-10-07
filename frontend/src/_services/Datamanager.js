import Axios from "./Caller.services";

const userLogin = async (credentials) => {
    const { data } = await Axios.post(`/api/v1/user/login`, credentials)
    return data
}


const getUser = async (userId) => {
    const { data } = await Axios.get(`/user/${userId}`)
    return data
}


export const dataServices = {
    userLogin
}