import React, { useState } from 'react'
import { Box, Button } from 'rebass'
import { Input, Textarea} from '@rebass/forms'

const PostForm = ({ currentUser, submit, errors }) => {

    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    return (
        <Box pl={4} as='form' onSubmit={e => {
            e.preventDefault();
            submit({ category, description, image })
            setCategory('')
            setDescription('')
            setImage('')
        }}>
            {
                errors && <div style={{ color: 'red' }}>{errors.join(', ')}</div>
            }
            <Box p={1}/>
                <Input bg='white' className="ImagePost" placeholder="Image URL..." type="text" name="Image" value={image} onChange={e => setImage(e.target.value)} />
            <Box/>
            <Box p={2}/>
                <Input bg='white' className="CategoryPost" placeholder="Category..." type="text" name="Category" value={category} onChange={e => setCategory(e.target.value)} />
            <Box/>
            <Box p={2}/>
                <Textarea bg='white' className="DescriptionPost" placeholder="Description..." name="description" value={description} onChange={e => setDescription(e.target.value)} />
            <Box/>
            <Box p={2}>
                <Button bg='blue' className="SubmitPost" color='white' type="submit">Post</Button>
            </Box>
        </Box>
    )
}

export default PostForm