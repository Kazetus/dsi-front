import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">

      <Header/>
      <Content title="test"/>
      <Footer/>
    </div>
  );
}

export default App;
