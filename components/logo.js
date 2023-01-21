import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  > 
  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    const starImg = `/images/star${useColorModeValue('','-dark')}.gif`

    return(
        <Link LeagacyBehaviour href="/"> 
            <LogoBox>
                <Image src={starImg} width={32} height={32} alt="logo"/>
                <Text
                 Color={useColorModeValue('gray.800','whiteAlpha.900')}
                 fontFamily='M PLUS Rounded 1c'
                 fontWeight="bold"
                 ml={3}>
                    Al Farhaan Khan I I
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
