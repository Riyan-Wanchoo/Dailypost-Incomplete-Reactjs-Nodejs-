import React, { useEffect } from 'react'

const Category = (props) => {
    useEffect(() => {
        props.setProgress(0)
        props.setProgress(100)
    })

    return (
        <div>This is {props.category}</div>
    )
}

export default Category