import React from 'react'
import "../componentstyles/Loading.css"

const Loading = () => {
  return (
    <div style={{position: "absolute",
        height: "100vh",
        width: "100vw",
        zIndex: "2",
        top: "0px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"}}>
        <img style={{height: "114px", width: "307px"}} src="/Loading.gif" alt="" />
        <h4><span>Dailypost</span></h4>
        <h5 className='loading-p' style={{ color: "#0195dd"}}>"Share awareness, Gain awareness"</h5>
    </div>
  )
}

export default Loading