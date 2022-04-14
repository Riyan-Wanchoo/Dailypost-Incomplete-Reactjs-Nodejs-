import React from 'react'

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
        <img style={{height: "20%", width: "25%"}} src="/Loading.gif" alt="" />
        <h4>Dailypost - "Share awareness, Gain awareness"</h4>
        <span>Loading...</span>
    </div>
  )
}

export default Loading