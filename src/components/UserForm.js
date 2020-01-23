  
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

const SignupForm = ({ submit, header }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Box as='form' onSubmit={e => {
            e.preventDefault();
            submit({ username, password })
            setUsername('')
            setPassword('')
        }}>
            <Flex mx={-2} mb={3}>
                <Box width={1/2} px={2}>
                    <Label htmlFor='name'>Username</Label>
                    <Input
                        type="username"
                        id='name'
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}              
                    />
                </Box>
                <Box width={1/2} px={2}>
                <Label htmlFor='name'>Password</Label>
                    <Input
                        type="password"
                        id='name'
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Box px={2} ml='auto'>
                        <Button sx={{backgroundColor: 'blue'} } className="Submitbutton" type="submit" mr={2}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default SignupForm