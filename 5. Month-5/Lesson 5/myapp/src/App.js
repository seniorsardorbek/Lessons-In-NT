import './App.scss';
import { Routes , Route } from "react-router-dom"
import Header from './components/Header/Header';
import  Home from '../src/components/Pages/Home'
import  About from '../src/components/Pages/About'
import  Servises from '../src/components/Pages/Servises'
import  Profiles from '../src/components/Pages/Profiles'
function App() {
  return (
    <div className="App container">
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/servises" element={<Servises/>} />
      <Route path="/profiles" element={<Profiles/>} />
     </Routes>
    </div>
  );
}

export default App;
