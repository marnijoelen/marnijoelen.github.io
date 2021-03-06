import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import NavBar from '../StaticElements/NavBar'
import FooterInfo from '../StaticElements/FooterInfo'

import StoryLink from './StoryLink'

const Page = styled.div`
    background-color: #CCCCCC;
`

const StoryTime = styled.div`
    display: flex;
    width: 55%;
    margin: 2rem auto;
    height: 80vh;
`

const StoryNav = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 5%;
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
    text-align: justify;
`
const LetsGo = styled.p``
const LetsGoNow = styled.a`
    color:red;
    cursor: pointer;

    &:hover {
        color:red;
        font-weight: bold;
    }
`

const ShortFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
`

const Start = () => {
    
    const history = useHistory()

    const startHere = () => {
        history.push('/cyoa-zombies/week-1')
    }

    return (
        <Page>
            <NavBar/>

            <StoryTime>

                <StoryNav>
                    <StoryLink/>
                </StoryNav>
                <Story>
                    <AZGTH>All Zombies Go To Heaven: Choose Your Own Adventure</AZGTH>
                    <StoryInfo>
                        This is an audience-voted choose your own adventure. Every week/two weeks, the next part of the story will be released based on audience vote. Once the story is complete, it will be released alongside the completed story for the unchosen selections.
                    </StoryInfo>
                    <StoryInfo>
                        <strong>This story is currently on hiatus. Click the links on the left to see the weeks that have been voted on.</strong>
                    </StoryInfo>
                    <StoryInfo>
                        You wake up in bed in a pile of your own bloody vomit. You don’t remember anything from right before you wake up. Figuring out why, and how to fix it, is up to you.
                    </StoryInfo>
                    <LetsGo>
                        <LetsGoNow onClick={startHere}>Start here!</LetsGoNow>
                    </LetsGo>
                </Story>

            </StoryTime>
            
            <ShortFooter>
                <FooterInfo/>
            </ShortFooter>
        </Page>
    )
}

export default Start