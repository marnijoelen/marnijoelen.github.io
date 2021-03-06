import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    width: 55%;
    /* justify-content:center; */
    margin:auto;
    padding: 4% 0;
`

const ImageBox = styled.div`
    width: 100rem;
`
const ImageItself = styled.img`
    width: 100%;
    padding-right: 5%;
`

const Info = styled.div`
    margin: 2%;
`
const Title = styled.h2``
const Description = styled.p`
    text-align: justify;
`
const BuyHere = styled.a``
const BuyWhere = styled.img`
    width: 20%;
    float:right;
    margin-right: 12%;
    margin-top: 2%;
`

const Story = props => {

    const {title,description,image,buycon,purchase} = props
    console.log(image)
    console.log(purchase)

    return (
        <Container>

        <ImageBox>
            <ImageItself src={image} alt="Dead Men Tell Tales (book cover)"/>
        </ImageBox>

        <Info>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <BuyHere href={purchase} target="_blank">
                <BuyWhere src={buycon}/>
            </BuyHere>
        </Info>

        </Container>
    )
}

export default Story