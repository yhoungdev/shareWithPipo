import {BrowserRouter as Router , Route , Redirect , Switch, Link} from 'react-router-dom'
import './components/css/bootstrap.min.css'
import './components/css/App.css';
import Auth from './components/auth'
import Main from './components/main'
import Music from './components/music'
import Doc from './components/doc'
import Photo from './components/photo'
import Pick from './components/pick'
import Error from './components/error'
import Gif from './components/gif'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/pick" component={Pick}/>
            <Route exact path="/" component={Main}/>
            <Route exact path="/photo" component={Photo}/>
            <Route exact path="/auth" component={Auth}/>
            <Route exact path="/doc" component={Doc}/>
            <Route exact path="/music" component={Music}/>
            <Route path="/gif" component={Gif}/>
            <Route component={Error}/>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
