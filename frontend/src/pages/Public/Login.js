import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataServices } from '@/_services/Datamanager'
import { accountServices } from '@/_services/Account.services';


const Login = () => {

    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: 'tony@stark.com',
        password: 'password123',
        remember: false,
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dataServices.userLogin(credentials)
            .then(res => {
                accountServices.saveToken(res.body.token)
                navigate('/user')
            })
            .catch(error => console.log(error))
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={onSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username</label>
                        <input type="text" name='email' value={credentials.email} onChange={onChange} id="email" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' value={credentials.password} onChange={onChange} id="password" />
                    </div>

                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            className="form-check-input"
                            onChange={onChange}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button type='submit' className="sign-in-button">Sign In</button>

                </form>
            </section>

        </main>
    );
};

export default Login;