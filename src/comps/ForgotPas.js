import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const ForgotPas = () => {
    const navigate = useNavigate();
    const [loader,setLoader] = useState(false);

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [cpass, setCPass] = useState("");

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
        if (data.password !== cpass){
            alert("Please confirm your password");
            setLoader(false)
        }
        else {
            await axios.post("https://crud-backend-uimf.onrender.com/update", { data })
            .then(res => {
                setLoader(false)
                alert(res.data.msg);
                navigate('/login')
            })
            .catch(err => {
                setLoader(false)
                alert(err.response.data.msg);
            })
        }
        
    }

    return (
        <div className='container mt-5 w-100 border p-5 bg-info'>
            <h2>Change Password</h2>
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
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        onChange={(e) => setCPass(e.target.value)}
                        required
                        className="form-control"
                        id="exampleInputPassword1"
                        name='password' />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
                {loader && <div className='loader'></div>}
            </form>
        </div>
    )
}

export default ForgotPas