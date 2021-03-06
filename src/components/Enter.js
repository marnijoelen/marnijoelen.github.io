import React from 'react'
import styled from 'styled-components'
import './css/enter.css'
import thumbprint from './images/thumbprint2.png'
import {useHistory} from 'react-router-dom'

const Page = styled.div`
    background-color: #CCCCCC;
    height: 100vh;
`

const LargeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const TextDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-family: "Cinzel", serif;
    font-size: 3.125em;
    z-index: 60;
`

const Name = styled.h1`
    font-size: 6rem;
    margin-bottom: 12%;
    font-weight: bold;
`

const EnterClick = styled.h3`
    text-decoration: underline;
    font-size:3.5rem;
    font-weight: bold;
    &:hover {
        color: #d40000;
    }
`

const Thumbprint = styled.div`
    position: absolute;
    float: right;
    right: 0;
    bottom: 0;
`

const Enter = () => {

    const history = useHistory()

    const enter = () => {
        history.push('/stories/dead-men-tell-tales')
    }

    return (
        <Page>
            <LargeDiv>
                <TextDiv>
                    <Name>Marni Joelen</Name>
                    <EnterClick onClick={enter}>ENTER</EnterClick>
                </TextDiv>
            </LargeDiv>
            <Thumbprint>
                <img src={thumbprint} alt="Bloody Thumbprint"/>
            </Thumbprint>
        </Page>
    )
}           

export default Enter