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
const RightChoice = styled.strong`
    &:hover {
        color: #d40000;
    }
`

const Footer = styled.footer`
    bottom: 0;
`

const Week4 = () => {

    
    const history = useHistory()

    const nextPage = () => {
        history.push('/cyoa-zombies/week-5')
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

                    <WeekInd>Week 4</WeekInd>

                    <StoryInfo>Last choice: <strong>Make a break for your room. If he sees the blood on your bed and the crappy science set out, he might be a little more understanding. You doubt it, but it’s a chance.</strong></StoryInfo>
                    
                    <StoryInfo>​You swing Nathan’s door wide open when you hear the water run in the bathroom and bolt to your bedroom, just on the other side of that door. You process the layout of your room rather slowly, having a hard time figuring out where to wait. You finally settle on the corner. You’re unsure why.</StoryInfo>

                    <StoryInfo>​You sit in the corner of your room near the closet and survey everything again as you wait. The bloody vomit sitting on the bedding, the strange black objects in it, the science kit. You write a mental list of everything that you want to throw away. That bed might have to go, too.</StoryInfo>

                    <StoryInfo>​The closet suddenly feels like a better place to hide, but it’s too late now; the water has stopped running, and you can hear Nathan open the door, You’re more afraid of attacking your brother again than you are of the next beating.</StoryInfo>

                    <StoryInfo>​“This bite won’t stop bleeding,” Nathan says to you. The doors are only a few steps apart, yet it feels like it’s taking forever for him to walk to you. “I’m probably going to need stitches. What the fuck was-“</StoryInfo>

                    <StoryInfo>​Nathan thumps hard onto the ground, leaning forward in his collapse and half of his body ends up in your room. He’s pale. Paler than you’ve ever seen him.</StoryInfo>

                    <StoryInfo>​You scramble forwards and run on all fours towards him, keeping low to the ground. “Hey!” You shout. “Hey, get up!”</StoryInfo>

                    <StoryInfo>​Nathan’s eyes roll back and forth rapidly. Is this a seizure? You’ve never seen one, and certainly Nathan’s never had one. You shake him, trying to snap him out of whatever’s happened. Part of you wants to believe this is revenge for attacking him, but revenge wouldn’t make his skin pale and his eyes go gray.</StoryInfo>

                    <StoryInfo>​You prop Nathan up in your arms, resting his back on your knees, giving yourself a better angle to try to wake him up.</StoryInfo>

                    <StoryInfo>​Nathan’s eyes stopped dancing when you picked him up. You shake him again, lightly, towards you. Bad move. That little jolt coaxed your brother to vomit all over you.</StoryInfo>

                    <StoryInfo>​You need to get him to the hospital. You drop Nathan, perhaps a little bit too hard, and you clamber to find your phone on your desk. You can still hear him vomiting. Holy hell.</StoryInfo>

                    <StoryInfo>​As you dial the 9, you turn around to face Nathan so you have updates for whoever answers the phone.</StoryInfo>

                    <StoryInfo>​You hit the first 1 and swipe some of the vomit off your shirt.</StoryInfo>

                    <StoryInfo>​You hit the second 1 and call as you crouch, trying to stay out of the stream but also keep Nathan’s head steady.</StoryInfo>

                    <StoryInfo>​“911 what’s your emergency?”</StoryInfo>

                    <StoryInfo>​“I am at 4923 E 73rd St, Unit 242. My brother-” you notice something about the vomit, and you stop talking.</StoryInfo>

                    <StoryInfo>​Nathan is also vomiting blood with black chunks in it.</StoryInfo>

                    <StoryInfo>​“Hello?” the operator says calmly. “Hello?”</StoryInfo>

                    <StoryInfo>​“He’s bleeding out,” you whisper.</StoryInfo>

                    <StoryInfo>​“I need you to speak up, I’m sorry. Please remain calm.”</StoryInfo>

                    <StoryInfo>​“My brother needs help!” You almost shout into the phone. “Please come to 4923 E 73rd-”</StoryInfo>

                    <StoryInfo>​“Please hold.”</StoryInfo>

                    <StoryInfo>​Hold? <em>Now??</em></StoryInfo>

                    <StoryInfo>​Thankfully, Nathan has stopped vomiting, but you’re on hold, and the confusion of everything is starting to become a little too much.</StoryInfo>

                    <StoryInfo>​“I apologize for putting you on hold; I’m new. I’m so sorry. I’ve spoken to my supervisor, and unfortunately, unless you can form words, we’ll need you to call back from a landline. We cannot trace you, and we cannot
                    understand your groans.”</StoryInfo>

                    <StoryInfo>​“I am speaking clearly!”</StoryInfo>

                    <StoryInfo>​“Please call us back from a landline so we can find you.”</StoryInfo>

                    <StoryInfo>​Are 911 operators allowed to hang up on someone who needs help? Fuck. And who uses landlines anymore? You throw your phone across the room. Apparently it’s useless, anyways.</StoryInfo>

                    <StoryInfo>​Nathan started hiding his keys after that time you “borrowed” his car right before he had class, so you can’t drive him to the hospital yourself. You sit and pat your unconscious brother on the head, soothing yourself more than him. “We’ll figure something out, bro. I woke up from this, you will, too.”</StoryInfo>

                    <StoryInfo>​You decide that, in an hour, if Nathan hasn’t woken yet, then you’ll do something about it. You acknowledge that this is probably you shutting down from too much information, but you’re having a hard time convincing yourself to be more proactive.</StoryInfo>

                    <StoryInfo>​In the meantime, you find Nathan’s keys (in his last pair of pants); change your shirt, tossing the old one in the tub to scrub out later; and begin searching online for answers.</StoryInfo>

                    <StoryInfo>​One hour on the dot. Nathan has rolled around a little bit, groaning in his sleep, but hasn’t really budged past that. You know he’s alive.</StoryInfo>

                    <StoryInfo>​Do you:</StoryInfo>

                    <StoryInfo onClick={nextPage}><RightChoice>1) Wake him up and force him into the car to go to the hospital. Maybe it was something you ate or a bug going around, but you both have problems from whatever it was.</RightChoice></StoryInfo>

                    <StoryInfo>​2) Wake him up gently and try to help him better than you were able to help yourself when you first woke up.</StoryInfo>

                    <StoryInfo>​3) Leave him to sleep while you continue to search for information. He’ll wake up on his own eventually.</StoryInfo>
                </Story>

            </StoryTime>

            <Footer>
                <FooterInfo/>
            </Footer>
        </Page>
    )
}

export default Week4