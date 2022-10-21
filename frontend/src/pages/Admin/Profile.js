import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { dataServices } from '@/_services/Datamanager';

import Account from '@/components/UI/Account';
import { isConnected } from '@/feature/user.slice';




const Profile = () => {

    const dispatch = useDispatch()
    //on stocke ds une variable profileData l'ensemble de notre store
    const profileData = useSelector((state) => state.auth)


    const { isLoading, data, error } = useQuery('user', () => dataServices.userProfile())
    // const user = data || {}

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (error) {
        return <div className='network-error'>{error.message}</div>
    }

    const onUpdate = () => {
        dispatch(isConnected({

            email: data.body.email,
            firstName: data.body.firstName,
            lastName: data.body.lastName,
            token: data.token,
        }))
    }

    const handleEdit = () => {

    }

    return (
        <div className='profile'>

            <div className="header">
                <h1>Welcome back</h1>
                <form className='userForm'>
                    <div className="inputWrapper">
                        <label htmlFor="firstName"></label>
                        <input type="text" id="firstName" name='firstName' placeholder={data.body.firstName} required />
                        <label htmlFor="lastName"></label>
                        <input type="text" id="lastName" name="lastName" placeholder={data.body.lastName} required />
                    </div>

                    <div className="userButtons">
                        <button className="btn" onClick={onUpdate} type="submit" >Save</button>
                        <button className="btn" type="submit" >Cancel</button>
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