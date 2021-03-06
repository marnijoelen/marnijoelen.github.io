import React from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

import NavBar from '../StaticElements/NavBar'
import FooterInfo from '../StaticElements/FooterInfo'

import story from './ZombieStory'

import Week1 from './Weeklys'
// import story from './ZombieStory'

const Page = styled.div`
    background-color: #CCCCCC;
`

const AZGTH = styled.h2`
    font-family: "Cinzel", serif;
    font-size: 2rem;
    font-weight: bolder;
`

const WeekInd = styled.p`
    font-family: "Cinzel", serif;
    font-size: 1.75rem;
`
const Story = styled.p`
    font-family: "Montserrat", serif;
    font-size: 1rem;
    text-align: justify;
`
const Options = styled.p`
    font-family: "Montserrat", serif;
    font-size: 1rem;
`

const WeeklyStory = props => {
    
    const {singlestory} = props

    const params = useParams()
    const idNumber = params.id
    const indexNumber = idNumber - 1

    const storyWeek = story[indexNumber]

    return (
        <Page>
            <AZGTH>All Zombies Go To Heaven: Choose Your Own Adventure</AZGTH>
            <WeekInd>Week {storyWeek.id}</WeekInd>
            {storyWeek.story.map(paragraph => {
                return <Story>{paragraph}</Story>
            })}
            {storyWeek.options.map((choices, index) => {
                return <Options>{choices}</Options>
            })}
        </Page>
    )
}

export default WeeklyStory