import React from 'react'
import { Image, Card } from 'semantic-ui-react'

const ImageCard = (props) => {

    const src = props.post.image

    return (
       <Card>
            <Image src={src}  />
        </Card>
    )
}

export default ImageCard