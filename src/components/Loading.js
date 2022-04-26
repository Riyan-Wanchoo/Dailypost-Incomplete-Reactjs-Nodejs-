import React from 'react'
import "../componentstyles/Loading.css"

const Loading = () => {
  return (
    <div className='cont-load'>
        <img src="/Loading.gif" alt="" />
        <h4><span>Dailypost</span></h4>
        <h5 className='loading-p' style={{ color: "#0195dd"}}>"Share awareness, Gain awareness"</h5>
    </div>
  )
}

export default Loading