import PropTypes from 'prop-types'
import Players from '../Players/Players'

const PlayerContainer = ({ players, handleChoosePlayer }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-[220px]">
        {players.map((playerData) => (
          <Players
            key={playerData.player_id}
            playerData={playerData}
            handleChoosePlayer={handleChoosePlayer}
          />
        ))}
      </div>
    </div>
  );
};

PlayerContainer.propTypes = {
  players: PropTypes.array.isRequired,
  handleChoosePlayer: PropTypes.func.isRequired
};

export default PlayerContainer
