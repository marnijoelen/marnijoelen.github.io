import React from 'react'
import styled from 'styled-components'
import '../css/enter.css'

import NavBar from '../StaticElements/NavBar'
import FooterInfo from '../StaticElements/FooterInfo'

import Story from '../Story'

import dmttImage from '../images/DMTT-cover.png'
import amazonImage from '../images/Amazon.jpg'

const Footer = styled.footer`
    bottom: 0;
`

const DeadMenTellTales = () => {
    
    const deadMenInfo = {
        title: "Dead Men Tell Tales: 22 Short Stories For Corpses",
        description: [
            "Neris Island has a complicated relationship with the creatures that live in their seas. Raph wants to do everything in his power to make his true love happy. Lily is going on one last road trip with her father. Erin needs to take down the new werewolf that was just turned, before the full moon.",
            "It’s okay if you’re not a corpse.​",
            "You will be one day."
        ],
        image: dmttImage,
        buycon: amazonImage,
        purchase: "https://www.amazon.com/Dead-Men-Tell-Tales-Stories-ebook/dp/B07B447CXY/ref=sr_1_1?s=books&ie=UTF8&qid=1539025617&sr=1-1"
    }
    
    return (
        <div>
            <NavBar/>
            <Story 
            title={deadMenInfo.title}
            description={deadMenInfo.description}
            image={deadMenInfo.image}
            buycon={deadMenInfo.buycon}
            purchase={deadMenInfo.purchase}
            />
            <Footer>
                <FooterInfo/>
            </Footer>
        </div>
    )
}

export default DeadMenTellTales