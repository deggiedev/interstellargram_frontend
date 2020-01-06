import React from 'react'
import { Image, Card } from 'semantic-ui-react'

const ImageCard = (props) => {

    const src = props.post.image
    const category = props.post.category
    const description = props.post.description

    return (
       <Card color='grey'>
            <Image src={src} />
        </Card>
    )
}

export default ImageCard