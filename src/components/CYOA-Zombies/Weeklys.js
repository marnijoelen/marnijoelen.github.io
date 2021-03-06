import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import NavBar from '../StaticElements/NavBar'
import FooterInfo from '../StaticElements/FooterInfo'

import WeeklyStory from './WeeklyStory'
import story from './ZombieStory'
import StoryLink from './StoryLink'

const Page = styled.div`
    background-color: #CCCCCC;
`

const StoryTime = styled.div`
    display: flex;
    width: 63%;
    margin: auto;
`

const StoryNav = styled.div`
    display: flex;
    flex-direction: column;
`

const Story = styled.div``
const AZGTH = styled.p`
    font-family: "Cinzel", serif;
    font-size: 2rem;
    font-weight: bolder;
`
const StoryInfo = styled.p`
    font-family: "Montserrat", serif;
    font-size: 1rem;
`
const LetsGo = styled.p``
const LetsGoNow = styled.a`
    color:red;

    &:hover {
        color:red;
        font-weight: bold;
    }
`

const Footer = styled.footer`
    bottom: 0;
`

const Weeklys = props => {

    const {singlestory} = props

    // console.log(singlestory)
    return (
        <div>
            <NavBar/>

            <StoryTime>

                <StoryNav>
                    {story.map(link => {
                        return <StoryLink key={link.id} singlestory={link}/>
                    })}
                </StoryNav>
                <Story>
                    <WeeklyStory story={singlestory}/>
                    
                </Story>

            </StoryTime>

            <Footer>
                <FooterInfo/>
            </Footer>
        </div>
    )
}

export default Weeklys