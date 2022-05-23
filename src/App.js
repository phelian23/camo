import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import FocusArea from './components/FocusArea';
import OurSuccess from './components/OurSuccess';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <FocusArea />
      <OurSuccess />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
