import "./App.scss";
import Header from "./components/Header/Header/Header";
import Intro from "./components/Intro/Intro";
import Sponsor from "./components/Sponsor/Sponsor";
import Vaccinationcon from "./components/Vaccinationcon/Vaccinationcon";
import Vaccinecon from "./components/Vaccinecon/Vaccinecon";
import Form from "./components/Form/From";
// import Section1 from './components/Section1/Section1';
function App() {
  return (
    <div className="container">
      <Header/>
      <Intro />
      <Sponsor />
      <Vaccinationcon />  
      <Vaccinecon/>
      <Form/>
    </div>
  );
}

export default App;
