import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

const PostForm = ({ submit, errors }) => {

    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    return (
        <Form onSubmit={e => {
            e.preventDefault();
            submit({ category, description, image })
            setCategory('')
            setDescription('')
            setImage('')
        }}>
            {
                errors && <div style={{ color: 'red' }}>{errors.join(', ')}</div>
            }
            <span>New post</span>
            <Form.Input className="Category" placeholder="Category" type="text" name="Category" value={category} onChange={e => setCategory(e.target.value)} />
            <textarea className="Description" placeholder="Description..." name="description" value={description} onChange={e => setDescription(e.target.value)} />
            <Form.Input className="Image" placeholder="Image" type="text" name="Image" value={image} onChange={e => setImage(e.target.value)} />
            <Button className="SubmitPost" type="submit">Post</Button>
        </Form>
    )
}

export default PostForm