import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Navigate } from 'react-router-dom'


const Trial = () => {
    const [Onenews, setOnenews] = useState([])
    const params = useParams()
    const slug = params.slug
    const category = params.category

    useEffect(() => {
        fetchFromDb()
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
        if (parsedres==null) {
            setOnenews({
                content: "<h2 style='text-align: center;'>404 Page not found</h2>"
            })
        }
        else{
            setOnenews(parsedres)
        }
    }
    return (
        <>
            <div
                dangerouslySetInnerHTML={{ __html: Onenews.content }}
            />
        </>
    )
}

export default Trial