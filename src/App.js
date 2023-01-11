import Navbar from './components/navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Route path='/' component={Home} exact />
          <Route path='/Skills' component={Skills} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Contact' component={Contact} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
