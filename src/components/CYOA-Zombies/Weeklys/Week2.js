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
    
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
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
const LetsGo = styled.p``
const LetsGoNow = styled.a`
    color:red;

    &:hover {
        color:red;
        font-weight: bold;
    }
`

const RightChoice = styled.strong`
    &:hover {
        color: #d40000;
    }
`

const Footer = styled.footer`
    bottom: 0;
`

const Week2 = () => {

    const history = useHistory()

    const nextPage = () => {
        history.push('/cyoa-zombies/week-3')
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
                    
                    <WeekInd>Week 2</WeekInd>

                    <StoryInfo>Last choice: <strong>Try to figure out what the black remnants in your vomit are, to attempt to figure out why you don’t remember the event.</strong></StoryInfo>
                    
                    <StoryInfo>What bothers you the most about this, or at least the only thing you can still focus on, are the black chunks floating in the red. The entire thing feels absolutely staged; you’re on a prank show, for sure, or an unknowing extra in a really bad B horror movie.</StoryInfo>

                    <StoryInfo>​In your closet, there’s a little science kit from when you were little; Mom had insisted you bring it with you to university “just in case,” and of course you did, and chucked it in the very far corner of your closet. You’d never need a toy made for 7-year olds. She always wanted you to be interested in science, like her, but you just couldn’t get into it.</StoryInfo>

                    <StoryInfo>​You tell yourself you’re never going to tell your mother that you had to use her stupid little toy.</StoryInfo>

                    <StoryInfo>​The box is dusty and fraying from age, and you, as quietly as you can, take the plastic display sheet out of the box and wedge out the microscope from its angrily tight seal. These boxes have always been a pain. Every gift you’ve ever been given with this packaging has always just begged you to chuck it.</StoryInfo>

                    <StoryInfo>​You set the little microscope on your desk, turning on the lamp. As you get comfortable in the desk chair, you lean over to grab a chunk and, arm in the air, weigh the pros and cons of just grabbing a chunk (it is from you, theoretically, after all), or trying to pry out those little tweezers from the science kit.</StoryInfo>

                    <StoryInfo>​You decide quickly that your hate of the plastic outweighs the disgust of picking up a chunk, and with your thumb and index, pinch a decent sized chunk off the bed.</StoryInfo>

                    <StoryInfo>​It’s… gelatinous? The thing seems to be only partially solid as the blackness peels off and slides back on to the mattress, making little splashes on its way down. Disgusting.</StoryInfo>

                    <StoryInfo>The chunk that you’re still holding onto is now less black and more pink. You give it a cautious squeeze and find that this part, at least, is completely solid. You decide you need to know what that black stuff was and scoop the part that slid off onto a sheet of paper where it slides around, and its remnants have a red hue.</StoryInfo>

                    <StoryInfo>Maybe it’s the lack of memory, or maybe it’s the utter confusion at the situation, but you end up watching the chunk of gelatin slide around the sheet of paper for a little while.</StoryInfo>

                    <StoryInfo>You only step out of the trance when you realize that the gelatin has to be chunks of clotted blood, and that pink thing you’ve been squeezing looks an awful lot like the color a chunk of pig before you cook it.</StoryInfo>

                    <StoryInfo>Dropping the paper onto the bed, you grab the science booklet, which thankfully is not wrapped in that horrid plastic cage, and flip just a couple pages until you see how to determine if the organism you’re looking at is alive or not.</StoryInfo>

                    <StoryInfo>You wedge the solid chunk under the microscope; it barely fits, but you have to know, and it really doesn’t matter at this point if you break it.</StoryInfo>

                    <StoryInfo>It’s pretty clear immediately that this is from a creature. You hope it is the pig. You keep telling yourself this, over and over again, because further back in your head, your mind is screaming <em>but what if it’s from you,</em> and you’re not quite ready for that crisis quite yet.</StoryInfo>

                    <StoryInfo>Do you:</StoryInfo>

                    <StoryInfo>1) Go out into the living room, grab a snack, and pretend everything is fine while you brainstorm other options.</StoryInfo>

                    <StoryInfo onClick={nextPage}><RightChoice>2) Talk to Nathan. With this new discovery, you’re forced to admit you need help.</RightChoice></StoryInfo>
                </Story>

            </StoryTime>

            <Footer>
                <FooterInfo/>
            </Footer>
        </Page>
    )
}

export default Week2