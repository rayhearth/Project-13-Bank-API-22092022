import Axios from "./Caller.services";

const login = async () => {
    const { data } = await Axios.post(`/api/v1/user/login`)
    console.log(data)
    return data
}


const getUser = async (userId) => {
    const { data } = await Axios.get(`/user/${userId}`)
    return data
}


export const dataServices = {
    login
}