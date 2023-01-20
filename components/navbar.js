import Logo from './logo.js'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    Menuitem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'

import {HamburgerIcon} from '@chakra-ui/icons'
import Head from 'next/head.js'

const LinkItem = ({href,path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.200','whiteAplha.900')
    return (
        <NextLink href={href}>
            <Link
             p={2}
             bg={active ? 'glassTeal' : undefined}
             color={active ? '#202023' : inactiveColor}
            >
            {children}
            </Link>
        </NextLink>
    )
}


const Navbar = props => {
    const {path} = props
    return (
        <Box 
         position='fixed'
         as="nav"
         W="100%"
         bg={useColorModeValue('#ffffff40','#20202380')}
         style={{backdropFilter:'blur(10px)'}}
         zIndex={1}
         {...props}
        >
            <Container 
             display="flex" 
             p={2} 
             maaxW="container" 
             wrap="wrap" 
             align="center" 
             justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar
