import React from 'react'
import { Image } from 'rebass'

const ImageCard = (props) => {

    const src = props.post.image
    const category = props.post.category
    const description = props.post.description

    return (
            <Image src={src} />
    )
}

export default ImageCard