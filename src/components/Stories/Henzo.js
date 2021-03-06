import React from 'react'
import styled from 'styled-components'
import NavBar from '../StaticElements/NavBar'
import FooterInfo from '../StaticElements/FooterInfo'

import Story from '../Story'

import henzoImage from '../images/Henzo-cover.jpg'
import amazonImage from '../images/Amazon.jpg'

const Page = styled.div`
    background-color: #CCCCCC;
`

const Footer = styled.footer`
    bottom: 0;
`

const Henzo = () => {

    const henzoInfo = {
        title: "Henzo and the Drawn Cats",
        description: [
            "Henzo has devoted his life to protecting the temple, but everything he’s worked so hard for could be ruined when a little boy comes through in the middle of the night. A retelling of the Japanese fable, The Boy Who Drew Cats."
            // <a class="regular" href="http://www.surlalunefairytales.com/books/japan/hearn/boydrewcats.html"><i>The Boy Who Drew Cats.</i>"
        ],
        image: henzoImage,
        buycon: amazonImage,
        purchase: "https://www.amazon.com/Henzo-Drawn-Cats-Marni-Joelen-ebook/dp/B01E9HHCR8"
    }

    return (
        <Page>
            <NavBar/>
            <Story 
            title={henzoInfo.title}
            description={henzoInfo.description}
            image={henzoInfo.image}
            buycon={henzoInfo.buycon}
            purchase={henzoInfo.purchase}
            />
            <Footer>
                <FooterInfo/>
            </Footer>
        </Page>
    )
}

export default Henzo