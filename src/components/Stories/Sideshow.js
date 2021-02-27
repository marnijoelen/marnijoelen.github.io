import React from 'react'
import styled from 'styled-components'
import NavBar from '../StaticElements/NavBar'
import FooterInfo from '../StaticElements/FooterInfo'

import Story from '../Story'

import sideshow from '../images/Sideshow-cover.jpg'
import indyImage from '../images/IndyPlanet.png'

const Footer = styled.footer`
    bottom: 0;
`

const Sideshow = () => {

    const sideshowInfo = {
        title: "Sideshow",
        description: [
            "Jeremy Snakeoil’s Phantasmagorical Circus and Mystic’s Show is hiding a secret. Tony the mime’s dream is to become a magician, but has yet to prove he has the ability for it, when Ms. Cynthia Freitag and her high school acting class give him just the opportunity he needs. (This story is also in Dead Men Tell Tales.)",
            "Check out the artist, Alex Brueggmann, on Twitter to enjoy more of his art.",
        ],
        image: sideshow,
        buycon: indyImage,
        purchase: "http://indyplanet.com/sideshow"
    }

    return (
        <div>
            <NavBar/>
            <Story
                title={sideshowInfo.title}
                description={sideshowInfo.description}
                image={sideshowInfo.image}
                buycon={sideshowInfo.buycon}
                purchase={sideshowInfo.purchase}
            />
            <Footer>
                <FooterInfo/>
            </Footer>
        </div>
    )
}

export default Sideshow