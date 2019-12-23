  
import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

const SignupForm = ({ submit, header }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Form onSubmit={e => {
            e.preventDefault();
            submit({ username, password })
            setUsername('')
            setPassword('')
        }}>
            <span>{header}</span>
            <Form.Input placeholder="Username" type="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
            <Form.Input placeholder="Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default SignupForm