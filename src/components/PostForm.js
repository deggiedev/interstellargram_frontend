import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

const PostForm = ({ currentUser, submit, errors }) => {

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
            <Form.Field/>
                <input className="ImagePost" placeholder="Image URL" type="text" name="Image" value={image} onChange={e => setImage(e.target.value)} />
            <Form.Field/>
            <Form.Field/>
                <input className="CategoryPost" placeholder="Category" type="text" name="Category" value={category} onChange={e => setCategory(e.target.value)} />
            <Form.Field/>
            <Form.Field/>
                <textarea className="DescriptionPost" placeholder="Description..." name="description" value={description} onChange={e => setDescription(e.target.value)} />
            <Form.Field/>
            <Button className="SubmitPost" color='blue' type="submit"fluid>Post</Button>
        </Form>
    )
}

export default PostForm