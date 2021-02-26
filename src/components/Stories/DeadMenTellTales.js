import React from 'react'
import styled from 'styled-components'
import '../css/enter.css'

import {Button} from 'reactstrap'

import NavBar from '../NavBar'



const DeadMenTellTales = () => {
    return (
        <div>
            <NavBar/>
            <Button color="danger">Danger!</Button>
        </div>
    )
}

export default DeadMenTellTales