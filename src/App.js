import './App.css';
import Header from './components/Header/Header';
import FilterBar from './components/FilterBar/FilterBar';
import CostBar from './components/CostBar/CostBar';
import TicketList from './components/TicketList/TicketList';

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [searchId, setSearchId] = useState('');
  

  useEffect(() => {
    axios.get('https://front-test.beta.aviasales.ru/search')
    .then(response => setSearchId(response.data.searchId))
  }, [])
  

 
  return (
    <>
      <Header />
      <main className="main">
        <div className="row">
          <FilterBar />
        </div>
        <div className="row">
          <CostBar />
          <TicketList searchId={searchId}/>
        </div>

      </main>
    </>

  );
}

export default App;
