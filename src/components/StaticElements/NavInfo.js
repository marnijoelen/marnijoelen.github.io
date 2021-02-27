import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const FullNav = styled.div`
    display:flex;
`

const FullBar = styled.nav``

// Toggle between this and navigation
const ToggleButton = styled.button``

const Navigation = styled.div``
const Category = styled.ul`
    display:flex;
    justify-content: space-evenly;
`
const Dropdown = styled.li``
const StoriesDrop = styled.a``
const DropdownMenu = styled.div``
const StoryLink = styled.a``

const List = styled.li``
const Link = styled.a``

const NavInfo = () => {

    const history = useHistory()

    // Stories
    const dmtt = () => {history.push("/stories/dead-men-tell-tales")}
    const henzo = () => {history.push("/stories/henzo-and-the-drawn-cats")}
    const huntersChase = () => {history.push("/stories/the-hunters-chase")}
    const sideshow = () => {history.push("/stories/sideshow-comic")}
    const theRive = () => {history.push("/stories/the-rive")}

    // Rest of Links
    const cyoa = () => {history.push("/cyoa-zombies/start-your-adventure")}
    const bio = () => {history.push("/biography")}
    const contact = () => {history.push("/contact")}
    const events = () => {history.push("/upcoming-events")}

    return (
        <FullNav>

            <FullBar>

                <ToggleButton/>

                <Navigation>

                    <Category>

                        <Dropdown>

                            <StoriesDrop>Stories</StoriesDrop>

                            <DropdownMenu>

                                <StoryLink onClick={sideshow}>Sideshow</StoryLink>
                                <StoryLink onClick={dmtt}>Dead Men Tell Tales</StoryLink>
                                <StoryLink onClick={henzo}>Henzo and the Drawn Cats</StoryLink>
                                <StoryLink onClick={huntersChase}>The Hunter's Chase</StoryLink>
                                <StoryLink onClick={theRive}>The Rive</StoryLink>

                            </DropdownMenu>
                            
                        </Dropdown>

                        <List>
                            <Link onClick={cyoa}>
                                Choose Your Own Adventure: Zombies
                            </Link>
                        </List>

                        <List>
                            <Link onClick={bio}>
                                Biography
                            </Link>
                        </List>

                        <List>
                            <Link onClick={contact}>
                                Contact
                            </Link>
                        </List>

                        <List>
                            <Link onClick={events}>
                                Upcoming Events
                            </Link>
                        </List>

                    </Category>

                </Navigation>

            </FullBar>

        </FullNav>
    )
}

export default NavInfo