import './App.css';
import Header from './components/Header/Header';
import FilterBar from './components/FilterBar/FilterBar';
import CostBar from './components/CostBar/CostBar';
import TicketList from './components/TicketList/TicketList';

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
          <TicketList />
        </div>

      </div>
    </>
    
  );
}

export default App;
