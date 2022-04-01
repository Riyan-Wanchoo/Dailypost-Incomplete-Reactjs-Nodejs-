import "../componentstyles/Navbar.css"
import React from 'react'

const Navbar = () => {
  const handleburger = ()=>{
    //wait
    const head2 = document.querySelector('.head2')
    if(head2.style.display==="flex"){
      head2.style.display = "none"
    }
    else{
      head2.style.display = "flex"
    }
    
  }
  return (
    <nav>
      <div className="head1">
        <img src="dailypost-logo.png" alt="Logo" />
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleburger} width="36" height="36" fill="currentColor" className="bi bi-list svg disabled" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>
      <div className="head2">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/india">India</a></li>
          <li><a href="/world">World</a></li>
          <li><a href="/entertainment">Entertainment</a></li>
          <li><a href="/tech">Tech</a></li>
          <li><a href="/business">Business</a></li>
          <li><a href="/health">Health</a></li>
          <li><a href="/sports">Sports</a></li>
          <li><a href="/science">Science</a></li>
          <li><a href="/travel">Travel</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar