import Navbar from './components/Navbar';
// import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Skills from './container/Skills/Skills';

import './App.scss'
import Education from './container/Education/Education';
import Work from './container/Work/Work';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Education/>
      <Skills/>
      {/* <About /> */}
      <Work/>
      <Footer/>
  
    </div>
  );
}

export default App;
