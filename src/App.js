import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <Greet/> */}
      {/* <Welcome/> */}
      {/* <Hello name="Joseph"></Hello> */}
      {/* <Welcome name="Joseph" nickname="Joe"></Welcome> */}
      <Message></Message>
    </div>
  );
}

export default App;
