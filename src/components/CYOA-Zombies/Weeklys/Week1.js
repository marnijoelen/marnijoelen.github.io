import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import NavBar from '../../StaticElements/NavBar'
import FooterInfo from '../../StaticElements/FooterInfo'

import StoryLink from '../StoryLink'

const Page = styled.div`
    background-color: #CCCCCC;
`

const StoryTime = styled.div`
    display: flex;
    width: 55%;
    margin: 2rem auto;
`

const WeekInd = styled.p`
    font-family: "Cinzel", serif;
    font-size: 1.75rem;
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

const RightChoice = styled.strong`
    &:hover {
        color: #d40000;
    }
`

const Footer = styled.footer`
    bottom: 0;
`

const Week1 = () => {

    const history = useHistory()

    const nextPage = () => {
        history.push('/cyoa-zombies/week-2')
    }

    return (
        <Page>
            <NavBar/>

            <StoryTime>

                <StoryNav>
                   <StoryLink/>
                </StoryNav>
                
                <Story>
                    <AZGTH>
                        All Zombies Go To Heaven: Choose Your Own Adventure
                    </AZGTH>

                    <WeekInd>Week 1</WeekInd>
                    
                    <StoryInfo>You were watching TV. You’ve just woken up on your bed, bright red vomit covering your comforter, with little black chunks mixed in. What the hell did you eat?</StoryInfo>

                    <StoryInfo>​”Hey! What’s going on in there? Are you alright?” there’s a loud pounding on your door. It has to be Nathan, your brother.</StoryInfo>

                    <StoryInfo>You blink, staring around your room, trying to make sense of what just happened, how long you’ve been out… why the fuck you vomited blood. Nathan is still slamming on the door, giving you a bigger headache.</StoryInfo>

                    <StoryInfo>​”Yeah, Nate, I’m fine,” you finally respond, if only to get him to stop pounding. No need to get him involved in here; there’s no chance he’s not going to freak out if he saw your room right now.</StoryInfo>

                    <StoryInfo>​Your record log from the lab is sitting on your desk. In a feeble attempt to figure out if you blacked out and scribbled some shit down, you grab it off your desk to examine it, and lay it in your lap, away from the
                    blood.</StoryInfo>

                    <StoryInfo><em>​Bdelloid DNA used to create a synthetic blood transfusion for humans to prolong life. These things live for millennia since they steal DNA from other creatures, living and dead.</em></StoryInfo>

                    <StoryInfo><em><strong>Day 1</strong> Burns like shit for half of the process. Almost ripped out the needle.</em></StoryInfo>

                    <StoryInfo><em><strong>Day 2</strong> I feel like I haven’t slept in years but also that that’s okay.</em></StoryInfo>

                    <StoryInfo><em>Thinking about Elsie a lot. She had the canine transfusion a few years ago, then went missing.</em></StoryInfo>

                    <StoryInfo><em><strong>Day 3</strong> Nathan found out. Yelled at me for not talking to him about getting the transfusion, called mom and dad.</em></StoryInfo>

                    <StoryInfo><em>Weird feeling in my gut. Not a bad feeling, feels more like I drank a lot of really good whiskey and it’s happy in my stomach.</em></StoryInfo>

                    <StoryInfo><em><strong>Day 4</strong> Memory has gotten better. Retention at 90%.</em></StoryInfo>

                    <StoryInfo><em>Not hungry at all.</em></StoryInfo>

                    <StoryInfo>Seemingly nothing. You flip through the remainder of the pages; sometimes you write notes on blank pages simply because you think you’ll find them later. You almost never do.</StoryInfo>

                    <StoryInfo>​Four days ago, you received a blood transfusion that was meant to extend the lives of humans, tested for eons and released three years after their national canine and feline launch. You’ve felt great since then. Very little need to sleep, not really all that hungry, and you can marathon through things and remember almost everything now.</StoryInfo>

                    <StoryInfo>​Elsie didn’t throw up after her transfusion. In fact, reflecting back on it, she disappeared just three days afterwards, and you’re on day four. Maybe she did, and you just never knew about it because she wasn’t around.</StoryInfo>

                    <StoryInfo>​Still, even armed with this new information, you need to figure out what’s going on.</StoryInfo>
                    
                    <StoryInfo>Do you:</StoryInfo>

                    <StoryInfo>1) check online three years ago for information on missing pets, in hopes of finding a new link to Elsie;</StoryInfo>

                    <StoryInfo onClick={nextPage}><RightChoice>2) try to figure out what the black remnants in your vomit are, to attempt to figure out why you don’t remember the event; or</RightChoice></StoryInfo>
                    
                    <StoryInfo>3) Go to Nathan’s room and get his help. Obviously this isn’t happening to him. He might be a sound figure to bounce ideas off of.</StoryInfo>
                </Story>

            </StoryTime>

            <Footer>
                <FooterInfo/>
            </Footer>
        </Page>
    )
}

export default Week1