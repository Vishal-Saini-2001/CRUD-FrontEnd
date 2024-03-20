import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const navigate = useNavigate();

    const [loader,setLoader] = useState(false);

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
        setLoader(true)
        await axios.post("https://crud-backend-uimf.onrender.com/register", { data })
            .then(res => {
                setLoader(false)
                alert(res.response.data.msg);
                navigate('/')
            })
            .catch(err => {
                setLoader(false)
                alert(err.response.data.msg);
            })
    }

    return (
        <div className='container mt-5 w-100 border p-5 bg-info'>
            <h2>Registeration</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
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
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
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
                <button type="submit" className="btn btn-primary">Register</button>
                {loader && <div hidden={loader} className='loader'></div>}
                <p className='mt-4'>Already have an account! Sign in below</p>
                <button className='btn btn-primary' onClick={() => navigate('/login')}>Go to Signin</button>
            </form>
        </div>
    )
}

export default Register