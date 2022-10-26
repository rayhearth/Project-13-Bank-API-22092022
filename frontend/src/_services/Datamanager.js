import Axios from "./Caller.services";


const userLogin = async (credentials) => {
    const { data } = await Axios.post(`/api/v1/user/login`, credentials)
    return data
}

const userProfile = async (userData, token) => {

    const { data } = await Axios.post(`/api/v1/user/profile`, userData, token)
    return data
}

const updateUserData = async (newData, token) => {
    const { data } = await Axios.put(`/api/v1/user/profile`, newData, token)
    return data
}

// const handleDelete = async (newData) => {
//     const { data } = await Axios.delete(`/api/v1/user/profile`, newData)
//     return data
// }


export const dataServices = {
    userLogin, userProfile, updateUserData
}