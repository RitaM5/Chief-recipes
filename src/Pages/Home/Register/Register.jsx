import React from 'react';

const Register = () => {
    return (
        <div>
            <div className="card w-96 glass">
            <input type="text" placeholder="name" className="input w-full max-w-xs" />
            <input type="email" placeholder="email" className="input w-full max-w-xs" />
            <input type="password" placeholder="password" className="input w-full max-w-xs" />
            <input type="text" placeholder="photo url" className="input w-full max-w-xs" />
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default Register;