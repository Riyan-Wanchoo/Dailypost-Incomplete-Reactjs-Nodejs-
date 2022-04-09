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



  const handleStorytitleclick = (slug) => {
    window.open(`/${slug}`, '_blank');
  }
  const handleNewstitleclick = (slug) => {
    window.open(`/${slug}`, '_blank');
  }
  const handleMaltitleclick = (slug) => {
    window.open(`/${slug}`, '_blank');
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
          return <div className="storyItem" key={story.slug}>
            <p className='storytitle' key={story.slug} onClick={() => handleStorytitleclick(story.slug)}>
              <b key={story.slug}>{"• " + story.title}</b>
            </p>
          </div>
        })}
      </div>
      <div className="latest-news">
        <h5 className="latest-header">Latest News</h5>
        {updatenews && data.topNews && data.topNews.map((element) => {
          return <div className="newsItem" key={element._id}>
            <div className="image-holder">
              <img className="imgWidth" src={element.imageUrl} alt="" />
            </div>
            <div className="content">
              <p className="category"><b>{element.category}</b></p>
              <p className="title" onClick={() => handleNewstitleclick(element.slug)}><strong>{element.title}</strong></p>
              <p className="desc">{element.content}</p>
            </div>
          </div>
        })}
      </div>
      <div className="may-also-like">
        <h5 className="mal-header">You may also like</h5>
        {updatenews && data.mal && data.mal.map((mal)=>{
          return <div className="mal-Item" key={mal.imageUrl}>
          <img src={mal.imageUrl} alt="" className="mal-img" />
          <div className="mal-category">
            {mal.category}
          </div>
          <div className="mal-title" onClick={() => handleMaltitleclick(mal.slug)}>
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