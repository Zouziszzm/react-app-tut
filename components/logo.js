import Link from 'next/link'
import Image from 'next/image'
import {Text,useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight:bold;
    font-size:18px;
    display:inline-flex;
    align-items:center;
    height: 30px;
    line-height:20px;
    padding:10px;

    &:hover img {
        transform: rotate{20deg};
    }
`

const Logo = () => 
{
    const logoImage = `/images/star${useColorModeValue('','-dark ').gif}`

    return(
        <Link legacyBehavior href="/">
            <a>
                <LogoBox>
                    <Image src={logoImage} width={20} height={20} alt="logo"/>
                    <Text color={useColorModeValue('gray.800','whiteAlpha.900')}
                     fontFamily='M PLUS rounded 1c '
                     fontWeight="bold"
                     ml={3}
                    >
                     Al farhaan khan I I           
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
