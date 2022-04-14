import "../componentstyles/Navbar.css"
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const newDate = new Date().toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
  const newDate2 = new Date()

  const newDateArr = newDate.split(",")
  const hms = newDateArr[1].split(":")

  const day = newDate2.getDay()
  const date = newDate2.getDate()
  const time = hms[0] + ":" + hms[1] + " PM"
  //from stackoverflow!!!
  var today
  var dd = String(newDate2.getDate())
  var mm = String(newDate2.getMonth())
  var yyyy = newDate2.getFullYear()

  today = dd + ' ' + months[mm] + ' ' + yyyy;
  //--Ends--

  const handleburger = () => {
    //wait
    const head2 = document.querySelector('.head2')
    if (head2.style.display === "flex") {
      head2.style.display = "none"
    }
    else {
      head2.style.display = "flex"
    }

  }
  return (
    <nav>
      <div className="time">
        <div className="date">
          <span>{days[day]}, {today}</span><span>{time} IST</span><span style={{borderRight: "none"}}>New Delhi</span>
        </div>
        <div className="country">
          <img style={{ width: "15px", marginRight: "5px", marginBottom: "2px" }} src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png?20111003033457" alt="" />
          India
        </div>
      </div>
      <div className="head1">
        <a href="/"><img src="/dailypost-logo.png" alt="Logo" /></a>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleburger} width="36" height="36" fill="currentColor" className="bi bi-list svg disabled" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>
      <div className="head2">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news/india">India</Link></li>
          <li><Link to="/news/world">World</Link></li>
          <li><Link to="/news/entertainment">Entertainment</Link></li>
          <li><Link to="/news/tech">Technology</Link></li>
          <li><Link to="/news/business">Business</Link></li>
          <li><Link to="/news/health">Health</Link></li>
          <li><Link to="/news/sports">Sports</Link></li>
          <li><Link to="/news/science">Science</Link></li>
          <li><Link to="/news/travel">Travel</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar