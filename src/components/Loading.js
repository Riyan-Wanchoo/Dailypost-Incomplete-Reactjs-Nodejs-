import React, { useEffect } from 'react'
import "../componentstyles/Loading.css"

const Loading = () => {
  const quotes = [
    {
      quote: 'All new news is old news happening to new people.',
      author: "Malcolm Muggerridge"
    },
    {
      quote: "Today's gossip is tomorrow's headine.",
      author: "Walter Winchell"
    },
    {
      quote: 'For most folks, no news is good news; for the press, good news in not news;',
      author: "Gloria Borger"
    },
    {
      quote: "The bad news in time flies. The good news is that you're the pilot.",
      author: "Michael AltShuler"
    },
    {
      quote: 'A newspaper is not just for reporting the news as it is, but to make people mad enough to do something about it.',
      author: "Mark Twain"
    },
    {
      quote: 'Beware of false knowledge; it is more dangerous than ignorance.',
      author: "George Bernard Shaw"
    },
    {
      quote: 'If you dont read newspapers, you\'re uninformed. If you do read them, you\'re misinformed.',
      author: "Albert Sidney"
    },
    {
      quote: 'Nowadays detoxing from news is just as important as detoxing your body.',
      author: "Mark Twain"
    },
    {
      quote: 'News is the first draft of history.',
      author: "Ben Bradlee"
    },
    {
      quote: 'Bad news travels at the speed of light; good news travels like molasses.',
      author: "Tracy Morgan"
    },
    {
      quote: 'News is to the mind what sugar is to the body.',
      author: "Rolf Debelli"
    }
  ]
  const quotenNum = Math.floor(Math.random() * 12);

  return (
    <div className='cont-load'>
      <div className='inner-cont-load'>
        <img src="/Loading.gif" alt="" />

        {/* <h4><span>Dailypost</span></h4>
        <h5 className='loading-p' style={{ color: "#0195dd"}}>"Share awareness, Gain awareness"</h5> */}
        <h4>"{quotes[quotenNum].quote}"</h4>

        <div className='quote-author'>
          <p className='my-2'>- {quotes[quotenNum].author}</p>
        </div>

      </div>
    </div>
  )
}

export default Loading