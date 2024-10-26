import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import AvailableContainer from './components/AvailableContainer/AvailableContainer';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [claimCoin, setClaimCoin] = useState(0)
  const [choosePlayer, setChoosePlayer] = useState([])

  const handleClaimCoin = () => {
    const randomMoney = Math.floor(Math.random() * (1500000 - 1000000 + 1)) + 1000000;
    toast.success(`Successfully added $${randomMoney} coin`, {
      position: "top-center",
      theme: "colored",
      autoClose: 1000,
    })
    setClaimCoin(claimCoin + randomMoney);
  }

  const handleChoosePlayer = (choosePlayerData) => {
    const isExist = choosePlayer.find(
      (prevChoose => prevChoose.player_id === choosePlayerData.player_id)
    );
    if(!isExist && choosePlayer.length < 6){
      if(choosePlayerData.bidding_price < claimCoin){
        setChoosePlayer([...choosePlayer, choosePlayerData]);
        setClaimCoin(claimCoin - choosePlayerData.bidding_price);
        toast.success(`Congratulation! Your have Successfully purchase ${choosePlayerData.name} in your team`, {
          position: "top-center",
          theme: "colored",
          autoClose: 2000,
        });
      }else{
          toast.info(`Your Coin balance ${claimCoin} is too low. Claim more Coin`, {
            position: "top-center",
            theme: "colored",
            autoClose: 2000,
          });
      }      
    }else{
      toast.error(`${choosePlayer.length === 6? 'You have purchase max player in your team': `You have already purchase ${choosePlayerData.name} in your team`}`, {
        position: "top-center",
        theme: "colored",
        autoClose: 2000,
      });
    }
  }

  const handleRemovePlayer = (playerID) => {
    const remainingPlayer = choosePlayer.filter(
      (prevChoose) => prevChoose.player_id !== playerID
    );
    setChoosePlayer(remainingPlayer);
    toast.warn(`You have successfully remove`, {
      position: "top-right",
      theme: "colored",
      autoClose: 2000,
    });
  }
  
  return (
    <>
      <Navbar claimCoin={claimCoin} />
      <Banner handleClaimCoin={handleClaimCoin} />
      <AvailableContainer
        handleChoosePlayer={handleChoosePlayer}
        choosePlayer={choosePlayer}
        handleRemovePlayer={handleRemovePlayer}
      />
      <Subscribe />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App
