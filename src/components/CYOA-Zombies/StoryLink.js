import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

// import story from './ZombieStory'

const Page = styled.div`
    background-color: #CCCCCC;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 767px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`

const StoryLinks = styled.a`
    color: black;
    font-size: 1.2rem;
    margin: .5rem 0;

    &:hover {
        color: #d40000;
        text-decoration: none;
        font-weight: bolder;
    }

    @media screen and (max-width: 767px) {
        padding: 0 1.5rem;
    }
`

const StoryLink = () => {

    const history = useHistory()

    const week1 = () => {
        history.push('/cyoa-zombies/week-1')
    }

    const week2 = () => {
        history.push('/cyoa-zombies/week-2')
    }

    const week3 = () => {
        history.push('/cyoa-zombies/week-3')
    }

    const week4 = () => {
        history.push('/cyoa-zombies/week-4')
    }

    const week5 = () => {
        history.push('/cyoa-zombies/week-5')
    }

    return (
        <Page>
            <StoryLinks onClick={week1}>
                Week 1 (Start Your Adventure Here)
            </StoryLinks>
            <StoryLinks onClick={week2}>
                Week 2
            </StoryLinks>
            <StoryLinks onClick={week3}>
                Week 3
            </StoryLinks>
            <StoryLinks onClick={week4}>
                Week 4
            </StoryLinks>
            <StoryLinks onClick={week5}>
                Week 5
            </StoryLinks>
            {/* <StoryLinks onClick={handleClick} singlestory={singlestory}>{singlestory.week}</StoryLinks> */}
        </Page>
    )
}

export default StoryLink