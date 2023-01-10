import Navbar from './components/navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <BrowserRouter>
          <Route path='/' component={Home} exact />
          <Route path='/Skills' component={Skills} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Contact' component={Contact} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
