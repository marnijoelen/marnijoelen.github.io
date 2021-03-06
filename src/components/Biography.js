import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

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
    height: 80vh;
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

const Link = styled.a`
    color: inherit;
    font-weight: bold;
    cursor: pointer;

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

const Biography = () => {

    const history = useHistory()

    const henzo = () => {
        history.push('/stories/henzo-and-the-drawn-cats')
    }

    const dmtt = () => {
        history.push('/stories/dead-men-tell-tales')
    }

    const sideshow = () => {
        history.push('/stories/sideshow-comic')
    }


    return (
        <Page>
            <NavBar/>

            <Container>
                <Info>
                    <Title>
                        About Marni
                    </Title>
                    <Description>
                        Marni Joelen is a huge supporter of NaNoWriMo, although rarely completes it. With her short story projects, <Link onClick={henzo}>Henzo and the Drawn Cats</Link> and <Link onClick={dmtt}>Dead Men Tell Tales</Link>, and her one-off comic, <Link onClick={sideshow}>Sideshow</Link>, completed, she’s turning her focus towards a new unnamed horror comic and a sci-fi dystopian novel, Null Set. She lives in Georgia with her two cats, disguising herself as a sane member of society until further notice.
                    </Description>
                </Info>
            </Container>

            <ShortFooter>
                <FooterInfo/>
            </ShortFooter>
        </Page>
    )
}

export default Biography