import './App.css';
import Header from './components/Header/Header';
import FilterBar from './components/FilterBar/FilterBar';
import CostBar from './components/CostBar/CostBar';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="row">
          <FilterBar />
        </div>
        <div className="row">
          <CostBar />
        </div>

      </div>
    </>
    
  );
}

export default App;
