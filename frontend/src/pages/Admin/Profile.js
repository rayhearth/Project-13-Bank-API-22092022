import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dataServices } from '@/_services/Datamanager';

import Account from '@/components/UI/Account';
import { updateData, cancel } from '@/feature/user.slice';


const Profile = () => {

    const dispatch = useDispatch()
    //on stocke ds une variable profileData l'ensemble de notre store
    const profileData = useSelector((state) => state.user)

    const [edit, setEdit] = useState({
        firstName: '',
        lastName: ''
    })

    const onChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const { isLoading, data, error } = useQuery('user', () => dataServices.userProfile())

    /**
     * when the page mount the new information store is dispatching in the component
     * @return  {state}  the state with the updated data
     */
    useEffect(() => {
        if (isLoading) {
            dataServices.userProfile()
                .then((data) => {
                    dispatch(updateData({
                        firstName: data.body.firstName,
                        lastName: data.body.lastName,
                    }))
                })
                .catch(err => console.log('an error occurs', err))
        }
    }, [])

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (error) {
        return <div className='network-error'>{error.message}</div>
    }

    /**
     * on Click save the new parameters and update data
     * @return  {state}     return edit state with updated data from the store
     */
    const handleEdit = (e) => {
        e.preventDefault()
        dataServices.updateUserData(edit)
            .then(() => {
                dispatch(updateData({
                    firstName: edit.firstName,
                    lastName: edit.lastName,
                }))
            })
            .catch(err => console.log('an error occurs', err))
    }

    /**
     * onClick delete the parameters
     * @return  {state}  return edit state with empty datas
     */
    const userDelete = () => {
        dataServices.updateUserData(edit)
            .then(() => {
                dispatch(cancel({
                    firstName: '',
                    lastName: '',
                }))
            })
            .catch(err => console.log('an error occurs', err))
    }


    return (
        <div className='profile'>
            <div className="header">
                <h1>Welcome back</h1>
                <form className='userForm'>
                    <div className="inputWrapper">
                        <label htmlFor="firstName"></label>
                        <input type="text"
                            id="firstName"
                            name="firstName"
                            defaultValue={profileData.firstName}
                            onChange={onChange} required />
                        <label htmlFor="lastName"></label>
                        <input type="text"
                            id="lastName"
                            name="lastName"
                            defaultValue={profileData.lastName}
                            onChange={onChange} required />
                    </div>

                    <div className="userButtons">
                        <button className="btn" onClick={handleEdit} type="button" >Save</button>
                        <button className="btn" onClick={userDelete} type="submit" >Cancel</button>
                    </div>
                </form>
            </div>
            <div className="accountUser">
                <h2 className="sr-only">Accounts</h2>
                <Account />
            </div>
        </div>
    );
};

export default Profile;