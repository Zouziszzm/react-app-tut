import head from 'next/head'
import {Box , Container } from '@chakra-ui/react'
const Main = ({children, router}) => {
    return(
        <Box as="main" pb={8}>
            <head>
                <meta name="vieport" content="width=device-width, inital-scale=1"/>
                <title>Al Farhaan Khan</title>
            </head>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container> 
        </Box>
    )
}

export default Main