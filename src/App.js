import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'

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
import Week1 from './components/CYOA-Zombies/Week1'
import Week2 from './components/CYOA-Zombies/Week2'
import Week3 from './components/CYOA-Zombies/Week3'
import Week4 from './components/CYOA-Zombies/Week4'
import Week5 from './components/CYOA-Zombies/Week5'

// Other
import Biography from './components/Biography'
import Contact from './components/Contact'
import Events from './components/Events'

function App() {
  return (
    <div>
      <Switch>
        {/* Enter page */}
        
        <Route exact path='/'>
          <Enter/>
        </Route>

        {/* Stories */}
        <Route path='/stories'>
          
          <Route path='/dead-men-tell-tales'>
            <DeadMenTellTales/>
          </Route>
          
          <Route path='/henzo-and-the-drawn-cats'>
            <Henzo/>
          </Route>
          
          <Route path='/the-hunters-chase'>
            <HuntersChase/>
          </Route>

          <Route path='/sideshow-comic'>
            <Sideshow/>
          </Route>

          <Route path='/the-rive'>
            <TheRive/>
          </Route>

        </Route>

        {/* Zombies */}
        <Route path='/cyoa-zombies'>
          
          <Route path='/start-your-adventure'>
            <Start/>
          </Route>

          <Route path='/week-1'>
            <Week1/>
          </Route>

          <Route path='/week-2'>
            <Week2/>
          </Route>

          <Route path='/week-3'>
            <Week3/>
          </Route>

          <Route path='/week-4'>
            <Week4/>
          </Route>

          <Route path='/week-5'>
            <Week5/>
          </Route>

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
