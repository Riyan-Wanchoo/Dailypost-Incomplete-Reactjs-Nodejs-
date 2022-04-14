import React from 'react'

const Topnews = (props) => {
    return (
        <>
            {props.topnewsData.latestNews &&
                <div className="outer-wrapper">
                    <div className='topnews'>
                        <div className="left">
                            <div className="innerleft">
                                <div>
                                    <a href={"/news/" + props.topnewsData.latestNews[0].category + "/" + props.topnewsData.latestNews[0].slug}>
                                        <img src={props.topnewsData.latestNews[0].imageUrl} alt="" />
                                        <h4 className="captionBig">{props.topnewsData.latestNews[0].title}</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <ul>
                                <li>
                                    <a href={"/news/" + props.topnewsData.latestNews[1].category + "/" + props.topnewsData.latestNews[1].slug}>
                                        <img src={props.topnewsData.latestNews[1].imageUrl} alt="" />
                                        <h4 id="one" className="caption top">{props.topnewsData.latestNews[1].title}</h4>
                                    </a>
                                </li>
                                <li>
                                    <a href={"/news/" + props.topnewsData.latestNews[2].category + "/" + props.topnewsData.latestNews[2].slug}>
                                        <img src={props.topnewsData.latestNews[2].imageUrl} alt="" />
                                        <h4 id="two" className="caption top">{props.topnewsData.latestNews[2].title}</h4>
                                    </a>
                                </li>
                                <li>
                                    <a href={"/news/" + props.topnewsData.latestNews[3].category + "/" + props.topnewsData.latestNews[3].slug}>
                                        <img src={props.topnewsData.latestNews[3].imageUrl} alt="" />
                                        <h4 id="three" className="caption btm">{props.topnewsData.latestNews[3].title}</h4>
                                    </a>
                                </li>
                                <li>
                                    <a href={"/news/" + props.topnewsData.latestNews[4].category + "/" + props.topnewsData.latestNews[4].slug}>
                                        <img src={props.topnewsData.latestNews[4].imageUrl} alt="" />
                                        <h4 id="four" className="caption btm">{props.topnewsData.latestNews[4].title}</h4>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Topnews