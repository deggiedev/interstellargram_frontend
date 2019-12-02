import React, { useState } from 'react'

const PostForm = ({ submit, errors }) => {

    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    return (
        <form onSubmit={e => {
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
            <input placeholder="Category" type="text" name="Category" value={category} onChange={e => setCategory(e.target.value)} />
            <textarea placeholder="Description..." name="description" value={description} onChange={e => setDescription(e.target.value)} />
            <input placeholder="Image" type="text" name="Image" value={image} onChange={e => setImage(e.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default PostForm