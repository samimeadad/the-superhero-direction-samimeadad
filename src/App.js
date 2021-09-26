import './App.css';
import Authors from './components/Authors/Authors';
import Header from './components/Header/Header';

function App () {
  return (
    <div>
      {/* Header Section */ }
      <Header></Header>
      {/* Authors Information */ }
      <Authors></Authors>
    </div>
  );
}

export default App;