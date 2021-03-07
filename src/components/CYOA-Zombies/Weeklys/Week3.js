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

const Week3 = () => {

    const history = useHistory()

    const nextPage = () => {
        history.push('/cyoa-zombies/week-4')
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

                    <WeekInd>Week 3</WeekInd>

                    <StoryInfo>Last choice: <strong>Talk to Nathan. With this discovery, you’re forced to admit you need help.</strong></StoryInfo>
                    
                    <StoryInfo>You suck up your pride. Nathan is going to scream about this, you just know it. You picture the scenario where Nathan shoves you into the car, slams the door, then lectures you about why blood means an immediate emergency. You know he means well, but this is also exactly why you didn’t come to him sooner about this.</StoryInfo>

                    <StoryInfo>​You brace yourself as you leave your room and position yourself outside of Nathan’s room, breathe in deeply, and knock three times.</StoryInfo>

                    <StoryInfo>“Nathan,” you call out.</StoryInfo>

                    <StoryInfo>​You know he’s in there, but he’s not responding.</StoryInfo>

                    <StoryInfo>“Hey, I need your help,” you say. You didn’t want to say it like that; Nathan always gives you this smug look when you say that. Both fortunately and unfortunately, Nathan seems to not have heard you. You pound on the door again. “Nathan!”</StoryInfo>

                    <StoryInfo>“Hold on!” Finally, an answer. You hear shuffling and firm footsteps heading towards you.</StoryInfo>

                    <StoryInfo>It still feels like it’s taking him forever, and you, in your impatience from actually admitting defeat, pound on the door again.</StoryInfo>

                    <StoryInfo>The door handle jiggles while you’re still knocking.</StoryInfo>

                    <StoryInfo>Something’s wrong.</StoryInfo>

                    <StoryInfo>You can’t move your arm. It’s stuck in the air.</StoryInfo>

                    <StoryInfo>“What is so damn important,” Nathan says, the door slightly open. The door swings wide open to put you and your brother face to face, and you regret now not asking for help sooner.</StoryInfo>

                    <StoryInfo>You seem to be paralyzed.</StoryInfo>

                    <StoryInfo>“Hey!” Nathan waves his hand in your face, annoyed. He lightly smacks your cheek. “Funny joke, but come on, what did you need?”</StoryInfo>

                    <StoryInfo><em>Didn’t you hear what I said? I need help!</em> You think. The pair of you have never telepathically passed information to each other before, and you’re even shit at charades, but maybe this once, he’ll actually hear you.</StoryInfo>

                    <StoryInfo>Your arm snaps to your side. You didn’t do that.</StoryInfo>

                    <StoryInfo><em>Nathan, help!</em></StoryInfo>

                    <StoryInfo>“Nate…” you groan. Okay, well at least that was part of the sentence you were trying to say. “Nate…” Stupid brain. One more time, here.</StoryInfo>

                    <StoryInfo>You take a step towards Nathan. You don’t recall wanting to do that. You take another step.</StoryInfo>

                    <StoryInfo>“Nate… Nath-ah…”</StoryInfo>

                    <StoryInfo>Nathan steps backwards from you, anticipating something, unknown to you. He seems more annoyed than anything.</StoryInfo>

                    <StoryInfo>Why in the hell are you still walking? <em>Stand still, idiot!</em> You yell at yourself.</StoryInfo>

                    <StoryInfo>“Naaaate…”</StoryInfo>

                    <StoryInfo>Nathan shuffles to your side, allowing you to keep moving forward towards his bed. You, instead, stand up straight and pause before turning towards him. Your vision blurs. The only thing that you can make out is Nathan. It feels like a glowing halo is shaded around his body, erasing everything else from view.</StoryInfo>

                    <StoryInfo><em>“Nathan!”</em></StoryInfo>

                    <StoryInfo>You swing an arm at Nathan, punching him in the side of the face. You have not chosen this, and know that you’re basically dead meat now – Nathan always won fights. Choosing anything now seems to be out of the question.</StoryInfo>

                    <StoryInfo>Nathan blocks and swings back, landing a hit on your chin. “What the fuck!”</StoryInfo>

                    <StoryInfo>Good news! You can’t choose your actions, but you don’t feel anything, either.</StoryInfo>

                    <StoryInfo>You jump, trying to topple Nathan to the ground, teeth bared. You’re screaming nonsense and you chomp repeatedly in Nathan’s direction. You’re bleeding on him from your mouth. Where the hell did that come from?</StoryInfo>

                    <StoryInfo>Nathan has an arm between you two, mostly to prevent you from biting him in the face. Instead, you bite his arm, firmer than you’ve ever bitten anything in your life, and take a small chunk of his arm.</StoryInfo>

                    <StoryInfo>You panic internally. There is no physical way you’ve actually taken a chunk of his arm, and definitely not with one bite. Yet, you can’t will your body against its goals.</StoryInfo>

                    <StoryInfo>Nathan yells and shoves you off, holding his arm which is bleeding quickly. “What the fuck!” He’s repeating himself. He’s at a loss for words, too, it seems.</StoryInfo>

                    <StoryInfo>You scramble to your feet again, still moving forward. Nathan punches you hard in the chest and you stumble backwards again, which causes you to spit out more blood.</StoryInfo>

                    <StoryInfo>Nathan stands over you as you move to get back up, and shoves a booted shoe into your neck to prevent you from moving. <em>Good move, I don’t think I could have stopped moving otherwise.</em></StoryInfo>

                    <StoryInfo>“You’ve got five minutes to come to your senses, or I’m going to beat your ass into the hospital,” Nathan growls. He removes himself from you and storms quickly out of the room, slamming it behind him.</StoryInfo>

                    <StoryInfo>As the footsteps fade into the bathroom, where Nathan is tending to his wound, you finally feel your body relax. You’ve regained control of your body.</StoryInfo>

                    <StoryInfo>He’s going to kill you, you just know it. He won’t be able to trust any movement you make for a while, and you can’t blame him at all.</StoryInfo>

                    <StoryInfo>Do you:</StoryInfo>

                    <StoryInfo>1) Wait for Nathan in his bedroom. Maybe you can explain.</StoryInfo>

                    <StoryInfo onClick={nextPage}><RightChoice>2) Make a break for your room. If he sees the blood on your bed and the crappy science set out, he might be a little more understanding. You doubt it, but it’s a
                        chance.</RightChoice></StoryInfo>

                    <StoryInfo>3) Run out the front door, and try to get to help yourself. If he finds you in the apartment when he finished bandaging himself, he’s going to kill you.</StoryInfo>
                </Story>

            </StoryTime>

            <Footer>
                <FooterInfo/>
            </Footer>
        </Page>
    )
}

export default Week3