import React from 'react'
import styled from 'styled-components'
import thumbprint from '../images/thumbprint2.png'
import {useHistory} from 'react-router-dom'

import NavInfo from './NavInfo'

const NaviBar = styled.div`
    background-color: #CCCCCC;
    width: 63%;
    margin: auto;
`

// Icon and Name

const HeaderNav = styled.nav`
    font-family: 'Cinzel', sans-serif;
    font-size: 3rem;
    color:black;
    padding: 2% 0 2% 4%;
    display: flex;
    align-content: center;
`

const Name = styled.a`
    color:black;
    
    &:hover {
        color:black;
        text-decoration: none;
    }
`

const Icon = styled.img`
    margin-right: 1rem;
`

const NavBar = () => {

    const history = useHistory()

    const dmtt = () => {
        history.push('/stories/dead-men-tell-tales')
    }
    
    return (
        <NaviBar>

            <HeaderNav>
                    <Icon src={thumbprint} width="50" height="50"/>
                <Name onClick={dmtt}>
                    Marni Joelen
                </Name>
            </HeaderNav>

            <NavInfo/>
   
        </NaviBar>
    )
}

export default NavBar