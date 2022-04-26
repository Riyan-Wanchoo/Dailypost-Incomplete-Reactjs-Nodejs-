import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../componentstyles/AdminLog.css"

const AdminLog = () => {
    const [credentials, setcredentials] = useState({ id: "", password: "" })
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch("http://localhost:8000/api/adminlogin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: credentials.id, password: credentials.password })
        })
        const json = await response.json()
        if (json.success === true) {
            navigate("/admin/dashboard")
            sessionStorage.setItem("Auth", "Authenticated")
        }
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="container-ad">
            <div style={{width: "30%"}}>
                <form onSubmit={handleSubmit}>
                    <h1 className='text-center my-3'>Dailypost</h1>
                    <h5 className='text-center'>Admin Login</h5>
                    <div className="mb-3">
                        <label htmlFor="Id" className="form-label">Admin-Id</label>
                        <input type="text" name='id' className="form-control" value={credentials.id} onChange={onChange} id="Id" aria-describedby="Id" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" value={credentials.password} onChange={onChange} id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login In</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLog