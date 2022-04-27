import "../componentstyles/Home.css"
import React, { useEffect, useState } from 'react'
import Latestnews from "./Latestnews"
import Topnews from "./Topnews"
import Loading from "./Loading"
import Footer from "./Footer"
import Allcatlat from "./Allcatlat"

const Home = (props) => {
  const [data, setdata] = useState({})
  const [loading, setloading] = useState(true)
  const [svgFill, setsvgFill] = useState("#0195dd")
  const [buttonStyle, setbutton] = useState({
    display: "none",
    width: "60px",
    height: "60px",
    position: "fixed",
    top: "88%",
    right: "2%",
    cursor: "pointer"
  })

  useEffect(() => {
    getnews()
  }, [])
  
  async function getnews(url = 'http://localhost:8000/api/fetchnews') {
    props.setProgress(0)
    setloading(true)
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const parsedres = await response.json()
    if (sessionStorage.getItem("doneOne") === "true") {
      props.setProgress(80)
      setdata(parsedres)
      props.setProgress(100)
      setloading(false)
    }
    else {
      setTimeout(() => {
        setdata(parsedres)
        setloading(false)
        sessionStorage.setItem("doneOne", true);
      }, 9000);
    }
  }

  window.onbeforeunload = function () {
    sessionStorage.clear()
    sessionStorage.setItem("lang", "English")
  }
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      setbutton({
        display: "block",
        width: "60px",
        height: "60px",
        position: "fixed",
        top: "88%",
        right: "2%",
        cursor: "pointer"
      })
    }
    else if (document.body.scrollTop < 500 || document.documentElement.scrollTop < 500) {
      setbutton({
        display: "none",
        width: "60px",
        height: "60px",
        position: "fixed",
        top: "88%",
        right: "2%",
        cursor: "pointer"
      })
    }
  })
  const goToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  const ScrollHover = () => {
    setsvgFill("#077fba")
  }
  const removeHover = () => {
    setsvgFill("#0195dd")
  }
  return (
    <>
      {/* <Loading/> */}
      {loading && !sessionStorage.getItem("doneOne") ?
        <>
          <Loading />
        </> :
        <>
          <svg onClick={goToTop} onMouseOver={ScrollHover} onMouseLeave={removeHover} style={buttonStyle} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill={svgFill}><path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,37.9948 30.8052,68.8 68.8,68.8c37.9948,0 68.8,-30.8052 68.8,-68.8c0,-37.9948 -30.8052,-68.8 -68.8,-68.8zM112.9868,78.5868c-2.24173,2.24173 -5.8652,2.24173 -8.10693,0l-13.14653,-13.14653v54.95973c0,3.1648 -2.5628,5.73333 -5.73333,5.73333c-3.17053,0 -5.73333,-2.56853 -5.73333,-5.73333v-54.95973l-13.14653,13.14653c-2.24173,2.24173 -5.8652,2.24173 -8.10693,0c-2.24173,-2.24173 -2.24173,-5.8652 0,-8.10693l22.93333,-22.93333c1.118,-1.118 2.58573,-1.67987 4.05347,-1.67987c1.46773,0 2.93547,0.56187 4.05347,1.67987l22.93333,22.93333c2.24173,2.24173 2.24173,5.8652 0,8.10693z"></path></g></g></svg>
          <Topnews topnewsData={data} />
          <Latestnews newsData={data} />
          <Allcatlat />
          <Footer />
        </>}
    </>
  )
}

export default Home