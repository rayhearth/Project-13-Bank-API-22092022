import { useSelector } from 'react-redux';

import { useNavigate, Link } from 'react-router-dom';
import { accountServices } from '@/_services/Account.services';

import React from 'react';

const AHeader = () => {

    let navigate = useNavigate()

    const profile = () => {
        navigate('/user')
    }

    /**
     * permet de récupérer le store à jour avec les nouveaux noms en temps réel
     * @const {string}
     */
    const user = useSelector((state) => state.user)

    /**
     * methode de account service enlève le token et efface le localstorage
     */
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
                        {user.firstName}
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