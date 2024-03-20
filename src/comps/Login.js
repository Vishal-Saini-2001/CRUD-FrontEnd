import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Login = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("https://crud-backend-uimf.onrender.com/login", { data })
            .then(res => {
                alert(res.data.msg);
                navigate('/logedin')
            })
            .catch(err => {
                alert(err.response.data.msg);
            })
    }

    return (
        <div className='container mt-5 w-100 border p-5 bg-info'>
            <h2>Login</h2>
            <br></br>
            <form onSubmit={handleSubmit} className='w-100'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        onChange={handleChange}
                        required
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name='email' />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        onChange={handleChange}
                        required
                        className="form-control"
                        id="exampleInputPassword1"
                        name='password' />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p className='mt-4'>Dont have an account! Create one below</p>
                <button className='btn btn-primary m-4' onClick={()=>navigate('/')}>Resgister first</button>
                <button onClick={()=>navigate('/forgot')} className='btn btn-danger mx-4'>Forgot password</button>
            </form>
        </div>
    )
}

export default Login