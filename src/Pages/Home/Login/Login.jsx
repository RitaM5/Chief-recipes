import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Login = () => {
    const { signIn, signInWithGithub, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    const from = location.state?.from?.pathname || '/';
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    //goole sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    }
    //github
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className='my-16 my-container'>
            <div className="card w-96 mx-auto bg-slate-300">
                <div className="card-body" >
                    <form onSubmit={handleLogIn}>
                        <input name="email" type="email" placeholder="email" className="input w-full max-w-xs" required />
                        <input name="password" type="password" placeholder="password" className="input mt-2 w-full max-w-xs" required />
                        <input className="mt-3 w-full btn btn-primary" type="submit" value="LogIn" required />
                        {
                            error && <p className='text-red-500 font-semibold mt-2'>Error: {error}</p>
                        }
                    </form>
                    <button onClick={handleGoogleSignIn} className="btn btn-active btn-accent"><img src="https://img.icons8.com/color/30/undefined/google-logo.png" /> <span className='text-white'> Google</span></button>
                    <button onClick={handleGithubSignIn} className='btn' type="submit"><img src="https://img.icons8.com/arcade/30/null/github.png" /> Github</button>
                    <p className='mt-1'><small className='font-semibold' style={{ fontSize: "14px" }}>Don't Have an Account ?</small> <Link to="/register" className=' underline text-green-600'>Please SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;