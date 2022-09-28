import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Tablecoi from './Components/Tablecoi';

function App() {

  const [coins, setCoins] = useState ([])
  const [search, setSearch] = useState('')

  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100")
    console.log(res.data)
    setCoins(res.data)
  }

    useEffect(() => {
      getData()
    }, []
    )

  return (
    <div className="cointainer">
      <h1 className='name'>Crazy Crypto</h1>
      <div className='row'>
      <input type='text' placeholder='Search a Coin' className='form-control bg-dark text-light border-0 mt-4 text-center' onChange={e => setSearch(e.target.value)}/>
      <Tablecoi  coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;