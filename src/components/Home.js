import "../componentstyles/Home.css"
import React, { useEffect, useState } from 'react'
import Latestnews from "./Latestnews"
import Topnews from "./Topnews"
import Loading from "./Loading"
import Footer from "./Footer"
import Allcatlat from "./Allcatlat"

const Home = () => {
  const [data, setdata] = useState({})
  const [loading, setloading] = useState(true)

  useEffect(() => {
    getnews()
  }, [])

  // useEffect(() => {
  //   setupdatenews(true)
  // }, [data])

  async function getnews(url = 'http://localhost:8000/api/fetchnews') {
    setloading(true)
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const parsedres = await response.json()
    if (sessionStorage.getItem("doneOne") === "true") {
      setdata(parsedres)
      setloading(false)
    }
    else {
      setTimeout(() => {
        setdata(parsedres)
        setloading(false)
        sessionStorage.setItem("doneOne", true);
      }, 4600);
    }
  }

  window.onbeforeunload = function () {
    sessionStorage.clear()
    sessionStorage.setItem("lang", "English")
  }

  return (
    <>
      {/* <Loading/> */}
      {loading && !sessionStorage.getItem("doneOne") ?
        <>
          <Loading />
        </> :
        <>
          <Topnews topnewsData={data} />
          <Latestnews newsData={data} />
          <Allcatlat/>
          <Footer />
        </>}
    </>
  )
}

export default Home