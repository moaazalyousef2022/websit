import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Space from './Components/Space';
import Skills from './Components/Skills.jsx';
import MyProjects from './Components/MyProjects';
import FormSection from './Components/FormSection';
import Footer from './Components/Footer.jsx';
import Section4 from './Components/Section4';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Space></Space>
        <Skills></Skills>
        <MyProjects></MyProjects>
        <FormSection></FormSection>
        <Section4></Section4>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
