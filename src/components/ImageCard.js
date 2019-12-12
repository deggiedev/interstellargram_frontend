import React from 'react'

const ImageCard = (props) => {

    let imageWidth = {
        width: '400px'
    }

    return (
        
        <>
            <div className='imagecard'>
                <div className="imagecontainer">
                    <img style={imageWidth} alt='' src={props.post.image}></img>
                </div>
                <div className="post-info">
                    <h2 className='category'>{props.post.category}</h2>
                    <p className='description'>{props.post.description}</p>  
                </div>
            </div>  
        </>
    )
}

export default ImageCard