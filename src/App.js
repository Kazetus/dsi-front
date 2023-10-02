import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Content from './component/wrapper/Content';
import Accueil from './component/accueil/Accueil';
import MyCars from './component/MyCars';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/cars" element={<MyCars title="Calatogue" />}/>
        {/* <Route path="/" element={<Content title="toto" />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
