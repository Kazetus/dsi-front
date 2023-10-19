import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './component/accueil/Accueil';
import Connexion from './component/connexion/connexion';
import Inscription from './component/inscription/Inscription';
import Account from './component/Account/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/signin" element={<Connexion />}/>
        <Route path="/signup" element={<Inscription />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
