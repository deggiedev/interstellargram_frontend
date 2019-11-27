import React from 'react'

const ImageCard = (props) => {

    let imageWidth = {
        width: '400px'
    }

    return (
        
        <>
            <div className='imagecard'>
                <img style={imageWidth} alt='' src={props.post.image}></img>
                <h2 className='category'>{props.post.category}</h2>
                <p className='description'>{props.post.description}</p>  
            </div>  
        </>
    )
}

export default ImageCard