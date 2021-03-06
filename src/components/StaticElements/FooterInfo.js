import React from 'react'
import styled from 'styled-components'
import twIcon from '../images/twitter.png'
import fbIcon from '../images/fb.png'
import igIcon from '../images/ig.png'

const FooterBox = styled.div``
const Container = styled.div`
    background-color: #b6b1b1;
    width: 100%;
    margin: auto;
    padding-top: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.75em;
`
const SocialLink = styled.a``
const Icons = styled.img`
    width: 30px;
    height: 30px;
`
const Copyright = styled.p`
    color:black;
    text-align:center;
`

const FooterInfo = () => {

    const twLink = "http://www.twitter.com/MarniJoelen"
    const fbLink = "http://www.facebook.com/MarniJoelen"
    const igLink = "https://www.instagram.com/marnijoelen_and_her_cats/"

    return(
        <FooterBox>
            <Container>
                <SocialLink href={twLink}>
                    <Icons src={twIcon} alt="Twitter Icon"/>
                </SocialLink>
                <SocialLink href={fbLink}>
                    <Icons src={fbIcon} alt="Facebook Icon"/>
                </SocialLink>
                <SocialLink href={igLink}>
                    <Icons src={igIcon} alt="Instagram Icon"/>
                </SocialLink>
            </Container>
            <Container>
                <Copyright>© 2020 Marni Joelen</Copyright>
            </Container>
        </FooterBox>
    )
}

export default FooterInfo