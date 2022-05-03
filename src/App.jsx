import './App.css';
import UseWindowSize from './hooks/UseWindowSize';

function App() {
  const { width, height } = UseWindowSize();
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-col">
          <div>Ancho: {width}</div>
          <div>Alto: {height}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
