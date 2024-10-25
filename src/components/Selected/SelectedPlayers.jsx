import PropTypes from 'prop-types'
import Selected from './Selected';

const SelectedPlayers = ({handleAvailableBtn, choosePlayer, handleRemovePlayer }) => {
  return (
    <div className="container mx-auto px-4">
      <div>
        {choosePlayer.map((player) => (
          <Selected
            key={player.player_id}
            choosePlayerData={player}
            handleRemovePlayer={handleRemovePlayer}
          />
        ))}
      </div>
      <button
        onClick={handleAvailableBtn}
        className="text-primary-color my-10 font-medium text-xl bg-[#E7FE29] rounded-xl py-2 px-3 ring-secondary-color/70 ring-offset-white  ring-1 ring-offset-4"
      >
        Add More Player
      </button>
    </div>
  );
};

SelectedPlayers.propTypes = {
  handleAvailableBtn: PropTypes.func.isRequired,
  choosePlayer: PropTypes.array.isRequired,
  handleRemovePlayer: PropTypes.func.isRequired,
};

export default SelectedPlayers
