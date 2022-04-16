import "../componentstyles/Navbar.css"
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const hostUrl = "localhost:3000"
  const srcData = {
    "English": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png",
    "French": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/640px-Flag_of_France.svg.png",
    "Hindi": "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
  }
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
  /*const changeLang = (language) => {
    sessionStorage.setItem("lang", language)
    document.getElementById("English").classList.remove("active")
    document.getElementById("Hindi").classList.remove("active")
    document.getElementById(language).classList.add("active")

    const topNav = document.getElementsByClassName('date')[0].innerText
    if (language == "English") {
      document.getElementsByClassName("secret")[0].src = srcData.English
      document.getElementsByClassName("secretp")[0].innerText = "English"
      convertnSet(topNav, "en")
    }
    else if (language == "French") {
      document.getElementsByClassName("secret")[0].src = srcData.French
      document.getElementsByClassName("secretp")[0].innerText = "French"
      convertnSet(topNav, "fr")
    }
    else if (language == "Hindi") {
      document.getElementsByClassName("secret")[0].src = srcData.Hindi
      document.getElementsByClassName("secretp")[0].innerText = "Hindi"
      convertnSet(topNav, "hi")
    }
  }
  const convertnSet = async (text, language) => {
    const res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: "en",
        target: language,
        format: "text"
      }),
      headers: { "Content-Type": "application/json" }
    });
    const response = await res.json()
    console.log(response.translatedText);
    document.getElementsByClassName("date")[0].innerHTML = `<span>${response.translatedText.split(" ")[0]}, ${response.translatedText.split(" ")[1] + " " + response.translatedText.split(" ")[2] + " " + response.translatedText.split(" ")[3]}</span><span>${response.translatedText.split(" ")[4]} IST</span><span style={{ borderRight: "none" }}>New Delhi</span>`
  }*/
  const change = (language)=>{
    document.getElementById("English").classList.remove("active")
    document.getElementById("Hindi").classList.remove("active")
    document.getElementById(language).classList.add("active")

    if (language == "English") {
      document.getElementsByClassName("secret")[0].src = srcData.English
      document.getElementsByClassName("secretp")[0].innerText = "English"
    }
    else if (language == "Hindi") {
      document.getElementsByClassName("secret")[0].src = srcData.Hindi
      document.getElementsByClassName("secretp")[0].innerText = "Hindi"
    }
  }
  return (
    <nav>
      <div className="time">
        <div className="date">
          <span>{days[day]}, {today}</span><span>{time} IST</span><span style={{ borderRight: "none" }}>New Delhi</span>
        </div>
        {/* <div className="country"> */}
        {/* <img style={{ width: "15px", marginRight: "5px", marginBottom: "2px" }} src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png?20111003033457" alt="" />
          India */}
        <div className="dropdown" role="button">
          <p style={{ margin: "0" }} className="" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            <img className="secret" style={{ width: "15px", marginRight: "5px", marginBottom: "2px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png" alt="" /><span className="secretp">English</span> <img style={{ width: "15px" }} src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/344/external-down-basic-ui-elements-flatart-icons-outline-flatarticons.png" alt="" />
          </p>
          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
            <li onClick={()=>{change("English")}}><a className="dropdown-item active" id="English" href="/">
              <img style={{ width: "15px", marginRight: "2px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png" alt="" /> English
            </a></li>
            <li onClick={()=>{change("Hindi")}}><a className="dropdown-item" id="Hindi" href={`https://translate.google.com/translate?sl=auto&tl=hi&hl=en&u=${hostUrl}&client=webapp`}>
              <img style={{ width: "15px", marginRight: "2px" }} src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="" /> Hindi
            </a></li>
          </ul>
        </div>
        {/* </div> */}
      </div>
      <div className="head1">
        <a href="/"><img src="/dailypost-logo.png" alt="Logo" /></a>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleburger} width="36" height="36" fill="currentColor" className="bi bi-list svg disabled" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>
      <div>
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
      </div>
    </nav>
  )
}

export default Navbar