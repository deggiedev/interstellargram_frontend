  
import React, { useState } from 'react'
import {
    Button,
    Box,
    Flex
  } from 'rebass'
import {
    Label,
    Input
} from '@rebass/forms'
import '../App.css';

const SignupForm = ({ submit, header }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Box  as='form' onSubmit={e => {
            e.preventDefault();
            submit({ username, password })
            setUsername('')
            setPassword('')
        }}>
            <Flex>
                <Box width={1/2} px={2}>
                    <Label fontWeight='bold' htmlFor='name'>{header}</Label>
                    <Input
                        type="username"
                        id='name'
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}   
                        placeholder={"username.."}          
                    />
                </Box>
                <Box width={1/2} px={2}>
                <Label htmlFor='name'>...
                </Label>
                    <Input
                        type="password"
                        id='name'
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder={"password.."} 
                    />
                </Box>
                <Box px={2} mt={13} className="Submitbutton" >
                        <Button fontWeight='bold' sx={{backgroundColor: '#2980B9'}} type="submit" mt={2}>Submit</Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default SignupForm