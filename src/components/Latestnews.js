import "../componentstyles/Latestnews.css"
import React, { useEffect, useState } from 'react'
// import "../componentstyles/Home.css"
// import StoryItem from "./StoryItem"

const Latestnews = (props) => {
  // const parsedres = {}
  // const [service, setservice] = useState({})
  const [data, setdata] = useState({})
  const [updatenews, setupdatenews] = useState(false)

  useEffect(() => {
    getnews()
  }, [])
  useEffect(() => {
    setupdatenews(true)
  }, [data])



  const handleStorydivclick = (category, slug) => {
    window.open(`/news/${category}/${slug}`, '_blank');
  }
  const handleNewsdivclick = (category, slug) => {
    window.open(`/news/${category}/${slug}`, '_blank');
  }
  const handleMaldivclick = (category, slug) => {
    window.open(`/news/${category}/${slug}`, '_blank');
  }
  const hover = (item, index) => {
    const title = document.getElementById(item + index)
    title.style.color = "rgb(21, 175, 175)"
  }
  const unHover = (item, index) => {
    const title = document.getElementById(item + index)
    title.style.color = "black"
  }
  async function getnews(url = 'http://localhost:8000/api/fetchnews') {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const parsedres = await response.json()
    setdata(parsedres)
  }

  return (
    <>
    <div className="story-container">
      <div className="stories">
        <div className="storyHeader">
          <h5 className="top-stories-header">Top Stories</h5>
        </div>
        {updatenews && data.stories && data.stories.map((story) => {
          return <div className="storyItem" key={story.slug} onClick={() => handleStorydivclick(story.category, story.slug)}>
            <p className='storytitle' key={story.slug}>
              <b key={story.slug}>{"• " + story.title}</b>
            </p>
          </div>
        })}
      </div>
      <div className="latest-news">
        <h5 className="latest-header">Latest News</h5>
        {updatenews && data.topNews && data.topNews.map((element, index) => {
          return <div className="newsItem" key={element._id} onClick={() => handleNewsdivclick(element.category, element.slug)} onMouseOver={() => hover("newsItem", index)} onMouseLeave={() => unHover("newsItem", index)}>
            <div className="image-holder">
              <img className="imgWidth" src={element.imageUrl} alt="" />
            </div>
            <div className="content">
              <p className="category"><b>{element.category}</b></p>
              <p className="title" id={"newsItem" + index}><strong>{element.title}</strong></p>
              <p className="desc">{element.title}</p>
            </div>
          </div>
        })}
      </div>
      <div className="may-also-like">
        <h5 className="mal-header">You may also like</h5>
        {updatenews && data.mal && data.mal.map((mal, index)=>{
          return <div className="mal-Item" key={mal.imageUrl} onClick={() => handleMaldivclick(mal.category, mal.slug)} onMouseOver={() => hover("malItem", index)} onMouseLeave={() => unHover("malItem", index)}>
          <img src={mal.imageUrl} alt="" className="mal-img" />
          <div className="mal-category">
            {mal.category}
          </div>
          <div className="mal-title" id={"malItem" + index}>
            <b>{mal.title}</b>
          </div>
        </div>
        })}
      </div>
    </div>
    <hr/>
    </>
  )
}

export default Latestnews