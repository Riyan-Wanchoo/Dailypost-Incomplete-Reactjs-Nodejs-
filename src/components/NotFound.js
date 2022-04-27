import React from 'react'
import '../componentstyles/NotFount.css'

const notFound = (props) => {
    props.setProgress(0)
    props.setProgress(60)
    props.setProgress(100)
    return (
        <div className="container-fluid" style={{height: "100%", backgroundColor: "#f8f9fc"}}>
            <div className="text-center">
                <div className="error mx-auto" data-text="404">404</div>
                <p className="lead text-gray-800 mb-5">Page Not Found</p>
                <p className="mess mb-2">It looks like you found a glitch in the matrix...</p>
                <a href="/">← Back to Home</a>
            </div>
        </div>
    )
}

export default notFound