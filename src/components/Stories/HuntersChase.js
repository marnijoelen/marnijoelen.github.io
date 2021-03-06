import React from 'react'
import styled from 'styled-components'
import NavBar from '../StaticElements/NavBar'
import FooterInfo from '../StaticElements/FooterInfo'

import downloadBook from '../Documents/hunters-chase.pdf'

const Page = styled.div`
    background-color: #CCCCCC;
`

const Container = styled.div`
    display:flex;
    width: 55%;
    margin:auto;
    padding: 4% 0;
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
const Download = styled.button`
    background-color:inherit;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
   
`
const DownloadClick = styled.a`
    color: black;
     
    &:hover {
        color: #d40000;
        text-decoration: none;
    }
`

const ShortFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
`

const HuntersChase = () => {
    return (
        <Page>
            <NavBar/>

            <Container>

                <Info>
                    <Title>The Hunter's Chase</Title>
                    <Description>    
                        Ross has been waiting for a long time to receive his liver, and his friend Erin has a problem with that. Enough of a problem that she confronts him after he is released from the hospital and tries to take him down.
                    </Description>
                    <Download>
                        <DownloadClick
                            href={downloadBook}
                            target="_blank"
                        >
                            Download free!
                        </DownloadClick>
                    </Download>
                </Info>

            </Container>

            <ShortFooter>
                <FooterInfo/>
            </ShortFooter>
        </Page>
    )
}

export default HuntersChase