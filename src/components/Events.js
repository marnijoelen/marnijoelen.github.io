import React from 'react'
import styled from 'styled-components'

import NavBar from './StaticElements/NavBar'
import FooterInfo from './StaticElements/FooterInfo'

import spooky from './images/spooky.png'
import c2e2 from './images/c2e2.png'

const Page = styled.div`
    background-color: #CCCCCC;
`

const EventsCont = styled.div`
    display: flex;
    justify-content:center;
    flex-direction: column;
    text-align: center;
    margin: 2rem;
`

const EventsTitle = styled.h1`
    font-family: 'Cinzel', sans-serif;
`
const Disclaimer = styled.p`
    margin: 1rem 0 2rem;
`

const EventListing = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 2rem;
`
const EventImg = styled.img`
    width: 20rem;
`
const EventD = styled.div`
    width: 20rem;
`
const EventDeets = styled.p`
    font-weight: bold;
    font-size: 1.2rem;
`

const Footer = styled.footer`
    bottom: 0;
`

const Events = () => {
    return (
        <Page>
            <NavBar/>
    
            <EventsCont>

                <EventsTitle>
                    Upcoming Events
                </EventsTitle>
                <Disclaimer>
                    (Naturally, pending pandemic results)
                </Disclaimer>

                <EventListing>
                    <EventImg src={spooky}/>
                    <EventD>
                        <EventDeets>
                            Spooky Empire
                        </EventDeets>
                        <EventDeets>
                            Hyatt Regency Orlando
                        </EventDeets>
                        <EventDeets>
                            October 22-24, 2021
                        </EventDeets>
                    </EventD>
                </EventListing>

                <EventListing>
                    <EventImg src={c2e2}/>
                    <EventD>
                        <EventDeets>
                            C2E2 (Chicago Comics and Entertainment Expo)
                        </EventDeets>
                        <EventDeets>
                            McCormick Place
                        </EventDeets>
                        <EventDeets>
                            December 10-12, 2021
                        </EventDeets>
                    </EventD>
                </EventListing>

            </EventsCont>

            <Footer>
                <FooterInfo/>
            </Footer>
        </Page>
    )
}

export default Events