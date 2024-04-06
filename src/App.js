
import './App.css';
import Date from './Date';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <h1>Current Date</h1>
      <Date />
      <h1>Current Time</h1>
      <Clock/>
    </div>
  );
}

export default App;
