import './App.css';
import {Switch, Route} from 'react-router-dom'
// import {createGlobalStyle} from 'styled-components'

// Pages
import Enter from './components/Enter'

// Stories
import DeadMenTellTales from './components/Stories/DeadMenTellTales'
import Henzo from './components/Stories/Henzo'
import HuntersChase from './components/Stories/HuntersChase'
import Sideshow from './components/Stories/Sideshow'
import TheRive from './components/Stories/TheRive'

// AZGTH
import Start from './components/CYOA-Zombies/Start'
import Week1 from './components/CYOA-Zombies/Weeklys/Week1'
import Week2 from './components/CYOA-Zombies/Weeklys/Week2'
import Week3 from './components/CYOA-Zombies/Weeklys/Week3'
import Week4 from './components/CYOA-Zombies/Weeklys/Week4'
import Week5 from './components/CYOA-Zombies/Weeklys/Week5'

// Other
import Biography from './components/Biography'
import Contact from './components/Contact'
import Events from './components/Events'

// const GlobalStyle = createGlobalStyle`
//     body {
//         color: ${props => (props.graybackground ? '#cccccc !important' : 'black')};
//     }
// `

function App() {
  return (
    <div>
      {/* <GlobalStyle graybackground/> */}
      <Switch>
        {/* Enter page */}
        
        <Route exact path='/'>
          <Enter/>
        </Route>

        {/* Stories */}          
          <Route path='/stories/dead-men-tell-tales'>
            <DeadMenTellTales/>
          </Route>
          
          <Route path='/stories/henzo-and-the-drawn-cats'>
            <Henzo/>
          </Route>
          
          <Route path='/stories/the-hunters-chase'>
            <HuntersChase/>
          </Route>

          <Route path='/stories/sideshow-comic'>
            <Sideshow/>
          </Route>

          <Route path='/stories/the-rive'>
            <TheRive/>
          </Route>

        {/* Zombies */}
          
          <Route path='/cyoa-zombies/start-your-adventure'>
            <Start/>
          </Route>

          <Route path='/cyoa-zombies/week-1'>
            <Week1/>
          </Route>

          <Route path='/cyoa-zombies/week-2'>
            <Week2/>
          </Route>

          <Route path='/cyoa-zombies/week-3'>
            <Week3/>
          </Route>

          <Route path='/cyoa-zombies/week-4'>
            <Week4/>
          </Route>

          <Route path='/cyoa-zombies/week-5'>
            <Week5/>
          </Route>

        <Route path='/biography'>
          <Biography/>
        </Route>

        <Route path='/contact'>
          <Contact/>
        </Route>

        <Route path='/upcoming-events'>
          <Events/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
