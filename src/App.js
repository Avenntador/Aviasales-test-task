import './App.css';
import Header from './components/Header/Header';
import FilterBar from './components/FilterBar/FilterBar';
import CostBar from './components/CostBar/CostBar';
import TicketList from './components/TicketList/TicketList';

import { useState } from 'react';

function App() {

  const [selectedFilter, setSelectedFilter] = useState(['all']);
  const [selectedCost, setSelectedCost] = useState('cheap')

  return (
    <>
      <Header />
      <main className="main">
        <div className="row">
          <FilterBar setSelectedFilter={setSelectedFilter} />
        </div>
        <div className="row">
          <CostBar setSelectedCost={setSelectedCost} />
          <TicketList selectedFilter={selectedFilter} selectedCost={selectedCost} />
        </div>

      </main>
    </>
  );
}

export default App;
