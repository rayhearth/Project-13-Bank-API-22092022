import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { dataServices } from '@/_services/Datamanager';

import Account from '@/components/UI/Account';
import { isConnected, updateData } from '@/feature/user.slice';
import { useState } from 'react';


const Profile = () => {

    const dispatch = useDispatch()
    //on stocke ds une variable profileData l'ensemble de notre store
    const profileData = useSelector((state) => state.auth)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const { isLoading, data, error } = useQuery('user', () => dataServices.userProfile())
    const user = data || {}

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (error) {
        return <div className='network-error'>{error.message}</div>
    }

    const onUpdate = () => {
        dispatch(isConnected({
            email: user.body.email,
            firstName: user.body.firstName,
            lastName: user.body.lastName,
            token: user.token,
        }))
    }

    const handleEdit = (e) => {
        e.preventDefault()

        dispatch(updateData({
            firstName: e.target.name,
            lastName: e.target.name
        }))

    }


    return (
        <div className='profile'>

            <div className="header">
                <h1>Welcome back</h1>
                <form className='userForm'>
                    <div className="inputWrapper">
                        <label htmlFor="firstName"></label>
                        <input type="text" id="firstName" name='firstName' placeholder={data.body.firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        <label htmlFor="lastName"></label>
                        <input type="text" id="lastName" name="lastName" placeholder={data.body.lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>

                    <div className="userButtons">
                        <button className="btn" onClick={handleEdit} type="submit" >Save</button>
                        <button className="btn" onClick={onUpdate} type="submit" >Cancel</button>
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