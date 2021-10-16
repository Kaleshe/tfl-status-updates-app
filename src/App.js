import './App.css';
import Services from './components/Services';
import logo from './logo.png';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <h1>TFL Status Updates <img alt="TFL Logo" className="logo" height={25} src={logo}/></h1>        
      </header>

      <div className="App-body">
        <Services />
      </div>

    </div>
  );
}

export default App;
