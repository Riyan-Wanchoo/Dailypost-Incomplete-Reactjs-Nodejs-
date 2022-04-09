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
    window.open('/', '_blank');
  }
  const handleMaltitleclick = (slug) => {
    window.open('/', '_blank');
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
              <img src={element.imageUrl} alt="" />
            </div>
            <div className="content">
              <p className="category"><b>{element.category}</b></p>
              <p className="title" onClick={() => handleNewstitleclick(1)}><strong>{element.title}</strong></p>
              <p className="desc">{element.content}</p>
            </div>
          </div>
        })}
      </div>
      <div className="may-also-like">
        <h5 className="mal-header">You may also like</h5>
        {updatenews && data.mal && data.mal.map((mal)=>{
          return <div className="mal-Item">
          <img src="https://resize.indiatvnews.com/en/resize/newbucket/290_-/2022/04/elonmusl-1649073762.jpg" alt="" className="mal-img" />
          <div className="mal-category">
            Business
          </div>
          <div className="mal-title" onClick={() => handleMaltitleclick(1)}>
            <b>Elon Musk buys 73.5 million shares of Twitter to acquire 9.2 per cent stake</b>
          </div>
        </div>
        })}
      </div>
    </div>
  )
}

export default Latestnews