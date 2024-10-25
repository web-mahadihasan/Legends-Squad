import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import PlayerContainer from '../PlayersContainer/PlayerContainer';
import Selected from '../Selected/Selected'


const AvailableContainer = ({ handleChoosePlayer }) => {
  const [isActiveContainer, setActiveContainer] = useState(true);
  const [players, setPlayers] = useState([]);

  const handleAvailableBtn = () => {
    setActiveContainer(true);
  };
  const handleSelectBtn = () => {
    setActiveContainer(false);
  };

  useEffect(() => {
    fetch(`person.json`)
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 mt-24 mb-8 flex justify-between items-center flex-col md:flex-row space-y-6 md:space-y-0">
        <div>
          <h3 className="text-2xl font-bold text-primary-color">
            Available Players for you
          </h3>
        </div>
        <div>
          <button
            onClick={handleAvailableBtn}
            className={`px-5 py-2 border border-[#1313131A]/10 rounded-l-lg ${
              isActiveContainer
                ? "bg-[#E7FE29] font-bold text-primary-color"
                : "bg-white text-[#13131399]/60 font-normal"
            }`}
          >
            Available
          </button>
          <button
            onClick={handleSelectBtn}
            className={`px-5 py-2 border border-[#1313131A]/10 rounded-r-lg ${
              isActiveContainer
                ? "bg-white text-[#13131399]/60 font-normal"
                : "bg-[#E7FE29] font-bold text-primary-color"
            }`}
          >
            Selected ({0})
          </button>
        </div>
      </div>
      <div></div>
      {/* // Player container */}
      {isActiveContainer ? (
        <PlayerContainer
          players={players}
          handleChoosePlayer={handleChoosePlayer}
        />
      ) : (
        <Selected />
      )}
    </>
  );
};

AvailableContainer.propTypes = {
  handleChoosePlayer: PropTypes.func.isRequired
  // handleAvailableBtn: PropTypes.func.isRequired,
  // handleSelectBtn: PropTypes.func.isRequired,
  // isActiveContainer: PropTypes.bool.isRequired,
};

export default AvailableContainer
