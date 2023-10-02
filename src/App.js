import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './component/wrapper/Content';
import Accueil from './component/accueil/Accueil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />}/>
        {/* <Route path="/" element={<Content title="toto" />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
