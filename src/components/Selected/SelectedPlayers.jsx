import PropTypes from 'prop-types'
import Selected from './Selected';

const SelectedPlayers = ({ choosePlayer }) => {
  return (
    <div className="container mx-auto px-4">
      {choosePlayer.map((player) => (
        <Selected key={player.player_id} choosePlayerData={player} />
      ))}
    </div>
  );
};

SelectedPlayers.propTypes = {
  choosePlayer: PropTypes.array.isRequired,
};

export default SelectedPlayers
