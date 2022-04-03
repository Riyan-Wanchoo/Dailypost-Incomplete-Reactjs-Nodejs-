import "../componentstyles/Home.css"
import React from 'react'
import Latestnews from "./Latestnews"

const Home = () => {
  return (
    <>
    <div className="outer-wrapper">
      {/* <h1>Top Headlines</h1> */}
      <div className='topnews'>
        <div className="left">
          <div className="innerleft">
            <div>
              <a href="/">
                <img src="https://resize.indiatvnews.com/en/resize/newbucket/620_-/2022/04/oilpipeline-1648804069.jpg" alt="" />
                <h4 className="captionBig">'Europe major buyer of Russian oil, gas even after war started': India talks tough amid US' warning</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="/">
                <img src="https://resize.indiatvnews.com/en/resize/newbucket/300_-/2022/04/russiaindiafm-1648803746.jpg" alt="" />
                <h4 id="one" className="caption top">''Meeting in difficult international environment': Jaishankar holds talks with Russian FM in Delhi</h4>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="https://resize.indiatvnews.com/en/resize/newbucket/300_-/2022/04/20210715008l-1626583647880-1626583673302-1648802257.jpg" alt="" />
                <h4 id="two" className="caption top">'20 kg RDX, 20 sleeper cells': Threat letter claims terror groups ready with plot to assassinate PM </h4>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="https://resize.indiatvnews.com/en/resize/newbucket/300_-/2022/04/imran-khan-1648803973.jpg" alt="" />
                <h4 id="three" className="caption btm">Plot to assassinate Pakistan PM Imran Khan reported, PM's security beefed up</h4>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="https://resize.indiatvnews.com/en/resize/newbucket/300_-/2022/04/pm-charcha-1648796251.jpg" alt="" />
                <h4 id="four" className="caption btm">Quashing reservation in promotion to SC/ST employees in jobs may lead to unrest: Centre tells SC</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Latestnews/>
    </>
  )
}

export default Home