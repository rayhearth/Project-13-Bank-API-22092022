import React from 'react';
import { Link } from 'react-router-dom';

const AHeader = () => {
    return (
        <header>
            <nav className="main-nav">
                <a className="main-nav-logo" href="./index.html">
                    <img
                        className="main-nav-logo-image"
                        src={process.env.PUBLIC_URL + '/assets/img/argentBankLogo.png'}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div className='linkContent'>
                    <Link to='/' className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </Link>
                    <Link to='/login' className="main-nav-item">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default AHeader;