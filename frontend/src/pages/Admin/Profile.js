import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { dataServices } from '@/_services/Datamanager';

import Account from '@/components/UI/Account';




const Profile = () => {

    const dispatch = useDispatch()
    const profileData = useSelector((state) => state.auth)
    console.log(profileData);

    const { isLoading, data, error } = useQuery('user', () => dataServices.userProfile())
    const user = data || { 'data': [] }

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (error) {
        return <div className='network-error'>{error.message}</div>
    }

    return (
        <div className='profile'>

            <div className="header">
                <h1>Welcome back</h1>
                <form className='userForm'>
                    <div className="inputWrapper">
                        <label htmlFor="firstName"></label>
                        <input type="text" id="firstName" name='firstName' placeholder={user.body.firstName} required />
                        <label htmlFor="lastName"></label>
                        <input type="text" id="lastName" name="lastName" placeholder='Starck' required />
                    </div>

                    <div className="userButtons">
                        <button className="btn" type="submit" >Save</button>
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