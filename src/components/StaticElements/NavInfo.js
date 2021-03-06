import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const FullNav = styled.div`
    display:flex;
    justify-content:center;
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;
    background-color: #CCCCCC;
`

const NavBar = styled(Navbar)`
    padding: 1rem 1rem 0;
    border-bottom: 1px solid black;
`

const DropdownTogg = styled(DropdownToggle)`
    font-weight: bold;
`

const NaviLink = styled(NavLink)`
    margin: auto 1.5rem;
    font-weight: bold;
`


const NavInfo = () => {

    const history = useHistory()

    // Stories
    const dmtt = () => {history.push("/stories/dead-men-tell-tales")}
    const henzo = () => {history.push("/stories/henzo-and-the-drawn-cats")}
    const huntersChase = () => {history.push("/stories/the-hunters-chase")}
    const sideshow = () => {history.push("/stories/sideshow-comic")}
    const theRive = () => {history.push("/stories/the-rive")}

    // Rest of Links
    const cyoa = () => {history.push("/cyoa-zombies/start-your-adventure")}
    const bio = () => {history.push("/biography")}
    const contact = () => {history.push("/contact")}
    const events = () => {history.push("/upcoming-events")}

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <FullNav>

            <NavBar light expand="md">
                
                <NavbarToggler onClick={toggle} />
                
                <Collapse isOpen={isOpen} navbar>
                
                    <Nav className="me-auto" navbar>
                        
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownTogg nav caret>
                                Stories
                            </DropdownTogg>
                            <DropdownMenu left>
                                <DropdownItem onClick={sideshow}>
                                    Sideshow
                                </DropdownItem>
                                <DropdownItem onClick={dmtt}>
                                    Dead Men Tell Tales
                                </DropdownItem>
                                <DropdownItem onClick={henzo}>
                                    Henzo and the Drawn Cats
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={huntersChase}>
                                    The Hunter's Chase
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={theRive}>
                                    The Rive
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        
                        <NavItem>
                            <NaviLink onClick={cyoa}>
                                Choose Your Own Adventure: Zombies
                            </NaviLink>
                        </NavItem>
                        
                        <NavItem>
                            <NaviLink onClick={bio}>Biography</NaviLink>
                        </NavItem>
                        
                        <NavItem>
                            <NaviLink onClick={contact}>Contact</NaviLink>
                        </NavItem>
                        
                        <NavItem>
                            <NaviLink onClick={events}>Upcoming Events</NaviLink>
                        </NavItem>
                        
                    </Nav>

                </Collapse>

            </NavBar>

        </FullNav>
    )
}

export default NavInfo