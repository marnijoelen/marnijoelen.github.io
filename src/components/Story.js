import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    width: 55%;
    /* justify-content:center; */
    margin:auto;
    padding: 4% 0;

    @media screen and (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
    }
`

const ImageBox = styled.div`
    width: 100rem;

    @media screen and (max-width: 1100px) {
        width: 80%;
        margin-bottom: 1rem;
    }
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
    font-family: "Montserrat", serif;
    font-size: 1rem;
    text-align: justify;
`
const BuyHere = styled.a``
const BuyWhere = styled.img`
    width: 20%;
    float:right;
    margin-right: 12%;
    margin-top: 2%;

    @media screen and (max-width: 1100px) {
        float: none;
    }
`

const Story = props => {

    const {title,description,image,buycon,purchase} = props
    console.log(description)

    return (
        <Container>

        <ImageBox>
            <ImageItself src={image} alt={title} />
        </ImageBox>

        <Info>
            <Title>{title}</Title>
            <Description>    
                {description.map(para => {
                    return <p>{para}</p>
                })}
            </Description>
            <BuyHere href={purchase} target="_blank">
                <BuyWhere src={buycon}/>
            </BuyHere>
        </Info>

        </Container>
    )
}

export default Story