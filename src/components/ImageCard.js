import React from 'react'
import { Image, Card } from 'semantic-ui-react'

const ImageCard = (props) => {

    const src = props.post.image

    return (
       <Card color='grey'>
            <Image src={src}  />
        </Card>
    )
}

export default ImageCard