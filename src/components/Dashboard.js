import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState({
        title: null,
        category: null,
        author: null,
        desc: null,
        content: null,
        slug: null,
        imageUrl: null,
        imageDesc: null,
        auth: null
    })
    const [preview, setpreview] = useState("nothing to preview")
    const [alert, setalert] = useState({
        display: "none"
    })

    useEffect(() => {
        if (sessionStorage.getItem("Auth") !== "Authenticated") {
            navigate("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault()
        setdata({
            title: document.getElementById("title").value,
            category: document.getElementById("category").value,
            author: document.getElementById("author").value,
            desc: document.getElementById("Desc").value,
            content: document.getElementById("Content").value,
            slug: document.getElementById("slug").value,
            imageUrl: document.getElementById("imageUrl").value,
            imageDesc: document.getElementById("ImageDesc").value,
            auth: "johnDoeAuth@Dailypost-Auth"
        })
        const response = await fetch("http://localhost:8000/api/addNews", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
        })
        const json = await response.json()
        if (json.success === true) {
            setalert({
                display: "block"
            })
        }
    }
    const handleChange = (e) => {
        setpreview(e.target.value)
    }
    return (
        <>
            <div className="alert alert-success" role="alert" style={alert}>
                Success: Stored successfully
            </div>
            <div className='my-4'>
                <h5>Check out our new dashboard <a href="/" style={{ textDecoration: "underline" }}>here</a></h5>
                <div className="container mt-3" style={{ width: "65%", marginBottom: "200px" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">title</label>
                            <input type="text" className="form-control" id="title" aria-describedby="emailHelp" autoComplete="off" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">category</label>
                            <input type="text" className="form-control" id="category" aria-describedby="emailHelp" autoComplete="off" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">author</label>
                            <input type="text" className="form-control" id="author" aria-describedby="emailHelp" autoComplete="off" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">desc</label>
                            <textarea className="form-control" id="Desc" rows="3" autoComplete="off"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">content</label>
                            <textarea className="form-control" name='content' value={preview} onChange={handleChange} id="Content" rows="10" autoComplete="off"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">slug</label>
                            <input type="text" className="form-control" id="slug" aria-describedby="emailHelp" autoComplete="off" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">imageUrl</label>
                            <input type="text" className="form-control" id="imageUrl" aria-describedby="emailHelp" autoComplete="off" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">imageDesc</label>
                            <textarea className="form-control" id="ImageDesc" rows="2" autoComplete="off"></textarea>
                        </div>
                        <div className="preview">
                            <h6>Preview html -</h6>
                            <div
                                dangerouslySetInnerHTML={{ __html: preview }} className="my-4" style={{ border: "1px solid black" }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Dashboard