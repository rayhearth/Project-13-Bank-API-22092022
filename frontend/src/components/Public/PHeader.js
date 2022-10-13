import React from 'react';
import { Link } from 'react-router-dom';

const PHeader = () => {
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
                <div>
                    <Link to='/login' className="mainNavSignIn" >
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>

        </header>
    );
};

export default PHeader;