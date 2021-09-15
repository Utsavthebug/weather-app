import './App.css';
import background from './images/purplebackground.jpg'
import Weather from './components/Weather';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${background})`}}>
      <Weather/>
    </div>
  );
}

export default App;
