import React from 'react';
import Account from '@/components/UI/Account';


const Profile = () => {
    return (
        <div className='profile'>
            <div class="header">
                <h1>Welcome back</h1>
                <form className='userForm'>
                    <div className="inputWrapper">
                        <label htmlFor="firstName"></label>
                        <input type="text" id="firstName" name='firstName' placeholder='Tony' required />
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