import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import "../componentstyles/slug.css"
import { Link } from 'react-router-dom';
import Footer from "../components/Footer"

const Slug = () => {
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
    const [Onenews, setOnenews] = useState([])
    const params = useParams()
    const slug = params.slug
    const category = params.category
    const IST = new Date(Onenews.date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });
    const [displayReply, setdisplayReply] = useState({
        display: "none"
    })

    useEffect(() => {
        fetchFromDb()
    }, [])
    useEffect(() => {
        sessionStorage.setItem("doneOne", true)
    }, [])

    const fetchFromDb = async () => {
        const url = 'http://localhost:8000/api/fetchContent'
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify({
                slug: slug,
                category: category,
            })
        })
        const parsedres = await response.json()
        if (parsedres == null) {
            setOnenews({
                content: "<h2 style='text-align: center;'>404 Page not found</h2>"
            })
        }
        else {
            setOnenews(parsedres)
        }
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
    const showAddReply = () => {
        setdisplayReply({
            display: "block"
        })
    }
    const unshowAddReply = () => {
        setdisplayReply({
            display: "none"
        })
    }
    return (
        <>
            {Onenews.content === "<h2 style='text-align: center;'>404 Page not found</h2>" ?
                <div className='tcontent'>
                    <div
                        dangerouslySetInnerHTML={{ __html: Onenews.content }}
                    />
                </div> :
                <div className='cont-contain'>
                    {/* <img style={buttonStyle} onClick={goToTop} src="/Scroll-To-Top.png" alt="" /> */}
                    <svg onClick={goToTop} onMouseOver={ScrollHover} onMouseLeave={removeHover} style={buttonStyle} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill={svgFill}><path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,37.9948 30.8052,68.8 68.8,68.8c37.9948,0 68.8,-30.8052 68.8,-68.8c0,-37.9948 -30.8052,-68.8 -68.8,-68.8zM112.9868,78.5868c-2.24173,2.24173 -5.8652,2.24173 -8.10693,0l-13.14653,-13.14653v54.95973c0,3.1648 -2.5628,5.73333 -5.73333,5.73333c-3.17053,0 -5.73333,-2.56853 -5.73333,-5.73333v-54.95973l-13.14653,13.14653c-2.24173,2.24173 -5.8652,2.24173 -8.10693,0c-2.24173,-2.24173 -2.24173,-5.8652 0,-8.10693l22.93333,-22.93333c1.118,-1.118 2.58573,-1.67987 4.05347,-1.67987c1.46773,0 2.93547,0.56187 4.05347,1.67987l22.93333,22.93333c2.24173,2.24173 2.24173,5.8652 0,8.10693z"></path></g></g></svg>
                    <div className="cont my-4">
                        <p className='location'><Link to="/">Home</Link>/<Link to="/">News</Link>/<Link to={"/news/" + category}>{category}</Link>/<Link to={"/news/" + category + "/" + slug}>{slug}</Link></p>
                        {/* <h2 className='newsHeader'>New York shooting: Man in gas mask fired 33 rounds; cops share image of 'person of interest' | Top points</h2> */}
                        <h2 className='newsHeader'>{Onenews.title}</h2>
                        <br />
                        {/* <i className='tdesc'>Several people were injured after an unidentified gunman opened fire at a subway station in New York, US. The Federal Bureau of Investigation is investigating the case with the New York Police Department. Here are the top developments around the incident.</i> */}
                        <i className='tdesc'>{Onenews.desc}</i>
                        <div className="timg">
                            <div className='inside'>
                                <div className="tleft">
                                    <div>
                                        <img className='logo' src="/dailypost-logo-bg.png" alt="" />
                                    </div>
                                    <div className='left-right'>
                                        <p className='dailyposthead'>DailyPost</p>
                                        <p className='Delhi'>New Delhi</p>
                                        <p className='Updated'>Updated on: {IST} IST</p>
                                    </div>
                                </div>
                                <div className="tright">
                                    <svg id='icon1' title="Share on Facebook" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3057a0" className="ico mx-2 bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                    <svg id='icon2' title="Share on Twitter" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#42bcf1" className="ico mx-2 bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                    <svg id='icon3' title="Share on Whatsapp" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#1d9e10" className="ico mx-2 bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                    </svg>
                                    <svg id='icon4' title="Copy to Clipboard" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="orange" className="ico mx-2 bi bi-clipboard" viewBox="0 0 16 16">
                                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                    </svg>
                                    <svg id='icon5' title="Post a Comment" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="orange" className="ico mx-2 bi bi-chat-fill" viewBox="0 0 16 16">
                                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                    </svg>
                                </div>
                            </div>
                            {/* <img className='mainImg' src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/New_York1_1200x768.jpeg?xgScfsqHP4GGJDhGgRmZG4G_Q_ASh5b2" /> */}
                            <img className='mainImg' src={Onenews.imageUrl} />
                            <div className='descImg'>
                                {/* <p className='mt-2 mb-0' style={{ width: "750px", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>Screengrab from a cellphone video shows people lying on the platform at the Brooklyn subway station in New York after an unidentified gunman opened fire. (AP/PTI)</p> */}
                                <p className='mt-2 mb-0' style={{ width: "750px", fontFamily: "'Open Sans', sans-serif", fontSize: "15px" }}>{Onenews.imageDesc}</p>
                                <hr style={{ width: "750px" }} />
                            </div>
                        </div>
                        <div className='tcontent'>
                            {/* <p>
                            Multiple people were fired upon at a subway station in New York, US, on Tuesday, April 12. Fire personnel responding to reports of smoke at the 36th Street station in Sunset Park, Brooklyn, found multiple people shot.
                        </p>
                        <br />
                        <p>
                            The New York Police Department (NYPD) on Wednesday, April 13, put out a picture of Frank James, a person of interest in the investigation.
                        </p>
                        <br /><br />
                        <span style={{ fontWeight: "700" }}>Here’s what we know about the incident so far:</span><br />
                        <p>
                            <strong>1.</strong> Over 20 people sustained various injuries after an unidentified gunman set off smoke bombs and opened fire at a subway station in Brooklyn, New York, during rush hours on Tuesday morning. Police said he fired 33 rounds.
                        </p><br />
                        <span className='mb-4' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <img style={{ width: "90%" }} src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202204/New_York2-1200x2000.jpg?qyzde67oqyzV5lo9WZUDhjR8dAATdnjc" alt="" />
                        </span>
                        <p>
                            <strong>2.</strong> According to a law enforcement source briefed on the investigation, preliminary information indicated the suspect was dressed in the attire of construction personnel from the Metropolitan Transportation Authority and was wearing a gas mask.
                        </p><br />
                        <p>
                            <strong>3.</strong> US President Joe Biden said 10 people were shot at in the incident.
                        </p><br />
                        <p>
                            <strong>4.</strong> The fire department and police were alerted by a fire alarm set off on a train at the station.
                        </p><br />
                        <p>
                            <strong>5.</strong> Multiple smoke devices were found on the scene, mayoral spokesperson Fabien Levy said. There were also reports of explosive devices being found at the scene.
                        </p><br />
                        <p>
                            <strong>6.</strong> Police described the suspected shooter as a Black man of about 5.5 feet and over 80 kg. Cops believe he acted alone. The motive is under investigation.
                        </p><br />
                        <span className='my-2' style={{ display: "flex", justifyContent: "center" }}>
                            <iframe src="https://platform.twitter.com/embed/Tweet.html?creatorScreenName=indiatoday&amp;dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3NwYWNlX2NhcmQiOnsiYnVja2V0Ijoib2ZmIiwidmVyc2lvbiI6bnVsbH0sInRmd19zZW5zaXRpdmVfbWVkaWFfaW50ZXJzdGl0aWFsXzEzOTYzIjp7ImJ1Y2tldCI6ImludGVyc3RpdGlhbCIsInZlcnNpb24iOjR9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1513959711263100929&amp;lang=en&amp;origin=https%3A%2F%2Fwww.indiatoday.in%2Fworld%2Fstory%2Fnew-york-shooting-brooklyn-fbi-probe-top-points-1936787-2022-04-13&amp;sessionId=3ca0eb36d1e92953e153d8af4eb5fbda83729acd&amp;siteScreenName=indiatoday&amp;theme=light&amp;widgetsVersion=940dd9ee54270%3A1649359550911&amp;width=550px" frameBorder="0" style={{ width: "566px", height: "705px" }}></iframe>
                        </span>
                        <p>
                            <strong>7.</strong> The Federal Bureau of Investigation is investigating the case with the New York Police Department.
                        </p><br />
                        <span className='mb-4' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <img style={{ width: "90%" }} src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202204/New_York3-1200x3201.jpg?kQwbR9iV0xtGTZIpVMG72JxYt1Gmvftr" alt="" />
                        </span>
                        <p>
                            <strong>8.</strong> Outside the station, in an area known for its thriving Chinatown and views of the Statue of Liberty, authorities shut down a dozen or so blocks and cordoned off the immediate vicinity with crime-scene tape. Schools in the neighbourhood were placed under security lockdowns.
                        </p><br />
                        <p>
                            <strong>9.</strong> Trains servicing the 36th Street station were cancelled
                        </p><br />
                        <p>
                            <strong>10.</strong> The White House is closely monitoring the situation. President Joe Biden said: "We're not letting up until the gunman is found."
                        </p><br /><br />
                        <p>
                            New York, the United States's most populous city, has seen a sharp rise in violent crime during the pandemic, including a spate of seemingly random attacks on New York City's subway. The system is one of the world's oldest and most extensive.
                        </p><br /> */}
                            <div
                                dangerouslySetInnerHTML={{ __html: Onenews.content }}
                            />
                            <hr />
                            <div className='text-center'>
                                <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Post a Comment (5)</button>
                            </div>
                            <div style={{ width: "700px" }} className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header">
                                    <h5 id="offcanvasRightLabel">Comments (5)</h5>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body text-left">
                                    <div className="addComment">
                                        <div className='addComment-inner'>
                                            <div className="comment-img">
                                                <img id="img" height="40" width="40" src="https://yt3.ggpht.com/ytc/AKedOLTZQI_RX4LKB2iC0mSVB2pTEOCt5IBwsASJCrcu=s88-c-k-c0x00ffffff-no-rj" />
                                            </div>
                                            <div className="addComm-content">
                                                <input type="text" placeholder='Add a Comment' />
                                            </div>
                                        </div>
                                        <div className='addComment-inner2'>
                                            <span className='mx-2 btn btn-danger'>Cancel</span>
                                            <button className='btn btn-info' type='button'>Comment</button>
                                        </div>
                                    </div>
                                    <div className="comments">
                                        <div className="commentItem">
                                            <div className="comment-img">
                                                <img id="img" height="40" width="40" src="https://yt3.ggpht.com/ytc/AKedOLTZQI_RX4LKB2iC0mSVB2pTEOCt5IBwsASJCrcu=s88-c-k-c0x00ffffff-no-rj" />
                                            </div>
                                            <div className="comment-body">
                                                <div className="comment-sender">
                                                    <b>Riyan Wanchoo</b>  <span className='text-muted mx-1'>5 days ago</span>
                                                </div>
                                                <div className="comment mt-1 mb-2">
                                                    This video made my entire year. It was so much fun! I can't wait to see part 2. This needs to be a series I swear! I will end up speaking fluent Indian very soon! &gt;3
                                                </div>
                                                <div className="likes">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-down mx-3" viewBox="0 0 16 16">
                                                        <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z" />
                                                    </svg>
                                                    <b style={{ cursor: "pointer" }} onClick={showAddReply}>Reply</b>
                                                </div>
                                                <div className="addReply" style={displayReply}>
                                                    <div className="addComment">
                                                        <div className='addComment-inner'>
                                                            <div className="comment-img">
                                                                <img id="img" height="40" width="40" src="https://yt3.ggpht.com/ytc/AKedOLTZQI_RX4LKB2iC0mSVB2pTEOCt5IBwsASJCrcu=s88-c-k-c0x00ffffff-no-rj" />
                                                            </div>
                                                            <div className="addComm-content">
                                                                <input style={{ paddingTop: "6px" }} type="text" placeholder='Add a Reply' />
                                                            </div>
                                                        </div>
                                                        <div className='addComment-inner2'>
                                                            <span className='mx-2 btn btn-danger' onClick={unshowAddReply}>Cancel</span>
                                                            <button className='btn btn-info' type='button'>Reply</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="viewreply mt-1">
                                                    <span><b>View Replies</b></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </>
    )
}

export default Slug