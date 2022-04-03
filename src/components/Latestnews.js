import "../componentstyles/Latestnews.css"
import React from 'react'
// import "../componentstyles/Home.css"

const Latestnews = (props) => {
  const handleNewstitleclick = (index)=>{
    window.open('/', '_blank');
  }
  const handleStorytitleclick = (index)=>{
    window.open('/', '_blank');
  }
  return (
    <div className="story-container">
      <div className="stories">
        <div className="storyHeader">
          <h5 className="top-stories-header">Top Stories</h5>
        </div>
        <div className="storyItem">
          <p className='storytitle' onClick={() => handleStorytitleclick(1)}>
            <b>• NCP going 'soft' on BJP? Murmurs of resentment in MVA over Home department's functioning</b>
          </p>
        </div>
        <div className="storyItem">
          <p className='storytitle' onClick={() => handleStorytitleclick(1)}>
            <b>• NCP going 'soft' on BJP? Murmurs of resentment in MVA over Home department's functioning</b>
          </p>
        </div>
        <div className="storyItem">
          <p className='storytitle' onClick={() => handleStorytitleclick(1)}>
            <b>• NCP going 'soft' on BJP? Murmurs of resentment in MVA over Home department's functioning</b>
          </p>
        </div>
        <div className="storyItem">
          <p className='storytitle' onClick={() => handleStorytitleclick(1)}>
            <b>• NCP going 'soft' on BJP? Murmurs of resentment in MVA over Home department's functioning</b>
          </p>
        </div>
        <div className="storyItem">
          <p className='storytitle' onClick={() => handleStorytitleclick(1)}>
            <b>• NCP going 'soft' on BJP? Murmurs of resentment in MVA over Home department's functioning</b>
          </p>
        </div>
        <div className="storyItem">
          <p className='storytitle' onClick={() => handleStorytitleclick(1)}>
            <b>• NCP going 'soft' on BJP? Murmurs of resentment in MVA over Home department's functioning</b>
          </p>
        </div>
        <div className="storyItem">
          <p className='storytitle' onClick={() => handleStorytitleclick(1)}>
            <b>• NCP going 'soft' on BJP? Murmurs of resentment in MVA over Home department's functioning</b>
          </p>
        </div>
      </div>
      <div className="latest-news">
        <h5 className="latest-header">Latest News</h5>
        <div className="newsItem">
          <div className="image-holder">
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/170_-/2022/04/pjimage-1-1648896414.jpg" alt="" />
          </div>
          <div className="content">
            <p className="category"><b>Health</b></p>
            <p className="title" onClick={() => handleNewstitleclick(1)}><strong>Fourth COVID wave? WHO warns new variant XE may be most transmissible. All you need to know</strong></p>
            <p className="desc">According to WHO, the new variant is 10 per cent more transmissible than the BA.2 subvariant, which makes it most contagious. However, the global health body noted there were "significant...</p>
          </div>
        </div>
        <div className="newsItem">
          <div className="image-holder">
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/170_-/2022/04/pjimage-1-1648896414.jpg" alt="" />
          </div>
          <div className="content">
            <p className="category"><b>Health</b></p>
            <p className="title" onClick={() => handleNewstitleclick(2)}><strong>Fourth COVID wave? WHO warns new variant XE may be most transmissible. All you need to know</strong></p>
            <p className="desc">According to WHO, the new variant is 10 per cent more transmissible than the BA.2 subvariant, which makes it most contagious. However, the global health body noted there were "significant...</p>
          </div>
        </div>
        <div className="newsItem">
          <div className="image-holder">
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/170_-/2022/04/pjimage-1-1648896414.jpg" alt="" />
          </div>
          <div className="content">
            <p className="category"><b>Health</b></p>
            <p className="title" onClick={() => handleNewstitleclick(3)}><strong>Fourth COVID wave? WHO warns new variant XE may be most transmissible. All you need to know</strong></p>
            <p className="desc">According to WHO, the new variant is 10 per cent more transmissible than the BA.2 subvariant, which makes it most contagious. However, the global health body noted there were "significant...</p>
          </div>
        </div>
      </div>
      <div className="may-also-like">
        <h5>You may also like</h5>
      </div>
    </div>
  )
}

export default Latestnews