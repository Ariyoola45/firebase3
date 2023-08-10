import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth';
import Films from './components/Films';
import Thing from './components/Thing';



function App() {
  return (
    <div className="App">
      <Auth/>
      <Films/>
      <Thing/>
    
    </div>
  );
}

export default App;
