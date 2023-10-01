import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './component/Content';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
