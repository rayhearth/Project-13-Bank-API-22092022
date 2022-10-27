import React from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { accountServices } from '@/_services/Account.services';

import { useSelector } from 'react-redux';

const AHeader = () => {

    let navigate = useNavigate()

    const profile = () => {
        navigate('/user')
    }

    const firstName = useSelector((state) => state.auth)
    console.log(firstName);

    const logout = () => {
        accountServices.logout()
        navigate('/login')
    }


    return (
        <header>
            <nav className="main-nav">
                <Link to='/' className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={process.env.PUBLIC_URL + '/assets/img/argentBankLogo.png'}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div className='linkContent'>
                    <button className="main-nav-item" onClick={profile}>
                        <i className="fa fa-user-circle"></i>
                        {firstName}
                    </button>

                    <button className="main-nav-item" onClick={logout}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </button>

                </div>
            </nav>
        </header>
    );
};

export default AHeader;