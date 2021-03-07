import React from 'react'
import styled from 'styled-components'
import NavBar from '../StaticElements/NavBar'
import FooterInfo from '../StaticElements/FooterInfo'

import riveImage from '../images/the-rive.jpg'
import imdbImage from '../images/imdb.png'

import Story from '../Story'

const Page = styled.div`
    background-color: #CCCCCC;
    height: 100vh;

    @media screen and (max-width: 1100px) {
        height: 100%;
    }

    @media screen and (max-height: 800px) {
        height: 100%;
    }
`

const ShortFooter = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;

    @media screen and (max-width: 1100px) {
        position: static;
    }

    @media screen and (max-height: 800px) {
        position: static;
    }
`



const TheRive = () => {

    const theRiveInfo = {
        title: "The Rive",
        description: [
            "From the mind of producer Troy Morrissey, The Rive is the story of Isla Gray, a teenager who has lost her entire family to the hands of a reckless drunk driver. Through her faith and isolation, Isla turns to Father Black, an ex-communicated priest, for guidance. She begins to see the world and its inhabitants for what they really are – sinners – and, in order to turn her modern Sodom and Gomorrah into a less sinful place, takes sin into her own hands to remove the immorality that plagues her town.",
            "Are you looking for a writer for your story? Email me to request a copy of the script as a demonstration of my script writing skills.​"
        ],
        image: riveImage,
        buycon: imdbImage,
        purchase: "https://www.imdb.com/title/tt5578884/?ref_=nm_knf_t1"
    }

    return (
        <Page>
            <NavBar/>
            <Story 
            title={theRiveInfo.title}
            description={theRiveInfo.description}
            image={theRiveInfo.image}
            buycon={theRiveInfo.buycon}
            purchase={theRiveInfo.purchase}
            />
            <ShortFooter>
                <FooterInfo/>
            </ShortFooter>
        </Page>
    )
}

export default TheRive