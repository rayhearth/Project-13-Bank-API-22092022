import React, { useState } from 'react';
import axios from "axios"

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: 'Tony',
        password: '$2b$12$dAhXQrapl9yJRZM.yfe4NuXTsSc6hZPCzji35gi80QU0OQCAONzr.'
    })

    const onChange = (e) => {

        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/auth/login', credentials)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={onSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' value={credentials.email} onChange={onChange} id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' value={credentials.password} onChange={onChange} id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    <a href="./user.html" className="sign-in-button">Sign In</a>
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    {/* <!-- <button class="sign-in-button">Sign In</button> --> */}
                    {/* <!--  --> */}
                </form>
            </section>

        </main>
    );
};

export default Login;