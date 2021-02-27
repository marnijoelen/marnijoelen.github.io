import React, {useState} from 'react'
import styled from 'styled-components'
import thumbprint from '../images/thumbprint2.png'
import {useHistory} from 'react-router-dom'

import NavInfo from './NavInfo'

const NaviBar = styled.div``

// Icon and Name

const HeaderNav = styled.nav`
    font-family: 'Cinzel', sans-serif;
    font-size: 3rem;
    color:black;
    padding: 2% 0 0 4%;
`

const Name = styled.a`
    color:black;
`

const Icon = styled.img`
    margin-right: 0.75%;
    margin-top: 0;
`

const NavBar = () => {

    const history = useHistory()

    const dmtt = () => {
        history.push('/stories/dead-men-tell-tales')
    }

    const [collapsed, setCollapsed] = useState(true);
    
    const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
        <NaviBar>

            <HeaderNav>
                <Name onClick={dmtt}>
                    <Icon src={thumbprint} width="50" height="50"/>
                    Marni Joelen
                </Name>
            </HeaderNav>

            <NavInfo/>
            
        </NaviBar>
    )
}

export default NavBar