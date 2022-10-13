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
                <div className='linkContent'>
                    <Link to='/login' className="main-nav-item" >
                        <i className="fa fa-user-circle"></i>
                        <p>Sign In</p>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default PHeader;