import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner';
import Navbar from './Navbar/Navbar';
import AvailableContainer from './components/AvailableContainer/AvailableContainer';
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  const[claimCoin, setClaimCoin] = useState(0)
 
  const handleClaimCoin = (addCoin) => {
    setClaimCoin(claimCoin + addCoin);
  }

  return (
    <>
      <Navbar claimCoin={claimCoin} />
      <Banner handleClaimCoin={handleClaimCoin} />
      <AvailableContainer />

      <Subscribe />
    </>
  );
}

export default App
