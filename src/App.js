import Navbar from './components/navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Skillsdetails from './pages/Skillsdetails';
import Notfound from './pages/Notfound';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/skills/:identifier' component={Skillsdetails} />
          <Route path='/skills' component={Skills} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
