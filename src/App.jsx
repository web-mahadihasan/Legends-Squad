import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import AvailableContainer from './components/AvailableContainer/AvailableContainer';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import PlayerContainer from './components/PlayersContainer/PlayerContainer';
import Selected from './components/Selected/Selected';

function App() {
  const [claimCoin, setClaimCoin] = useState(0)
  const [isActiveContainer, setActiveContainer] = useState(true)
  const [players, setPlayers] = useState([])
 
  const handleClaimCoin = (addCoin) => {
    setClaimCoin(claimCoin + addCoin);
  }

  const handleAvailableBtn = () => {
    setActiveContainer(true);
  }
  const handleSelectBtn = () => {
    setActiveContainer(false);
  }

  useEffect(()=> {
    fetch(`person.json`)
    .then(res => res.json())
    .then(data => setPlayers(data.players))
  }, [])

  return (
    <>
      <Navbar claimCoin={claimCoin} />
      <Banner handleClaimCoin={handleClaimCoin} />
      <AvailableContainer
        handleAvailableBtn={handleAvailableBtn}
        handleSelectBtn={handleSelectBtn}
        isActiveContainer={isActiveContainer}
      />
      {isActiveContainer ? <PlayerContainer players={players} /> : <Selected />}
      <Subscribe />
      <Footer />
    </>
  );
}

export default App
