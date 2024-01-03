import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <Greet/> */}
      {/* <Welcome/> */}
      <Hello></Hello>
    </div>
  );
}

export default App;
