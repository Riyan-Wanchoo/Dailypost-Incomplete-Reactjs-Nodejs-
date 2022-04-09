import React from 'react'

const StoryItem = (props) => {
    const handleStorytitleclick = (slug) => {
        window.open(`/${slug}`, '_blank');
      }
    return (
        <div className="storyItem">
            <p className='storytitle' onClick={() => handleStorytitleclick(props.slug)}>
                <b>{props.title}</b>
            </p>
        </div>
    )
}

export default StoryItem