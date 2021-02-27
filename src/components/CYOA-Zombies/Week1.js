import React from 'react'
import styled from 'styled-components'
import NavBar from '../StaticElements/NavBar'
import FooterInfo from '../StaticElements/FooterInfo'

const Footer = styled.footer`
    bottom: 0;
`

const Week1 = () => {
    return (
        <div>
            <NavBar/>
            <Footer>
                <FooterInfo/>
            </Footer>
        </div>
    )
}

export default Week1