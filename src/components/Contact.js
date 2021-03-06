import React from 'react'
import styled from 'styled-components'
import NavBar from './StaticElements/NavBar'
import FooterInfo from './StaticElements/FooterInfo'

const Page = styled.div`
    background-color: #CCCCCC;
`

const Container = styled.div`
    display:flex;
    width: 55%;
    margin:auto;
    padding: 4% 0;
    height: 80vh
`

const Info = styled.div`
    margin: 2%;
`
const Title = styled.h2``
const Description = styled.p`
    font-family: "Montserrat", serif;
    font-size: 1rem;
    text-align: justify;
`

const ShortFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
`

const Contact = () => {
    return (
        <Page>
            <NavBar/>

            <Container>
                <Info>
                    <Title>
                        Contact Me!
                    </Title>
                    <Description>
                        Let's talk! Check out my socials below or email me at marnijoelen@gmail.com.
                    </Description>
                </Info>
            </Container>

            <ShortFooter>
                <FooterInfo/>
            </ShortFooter>
        </Page>
    )
}

export default Contact