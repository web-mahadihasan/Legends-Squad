import PropTypes from 'prop-types'

const PlayerInfo = ({property, value}) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-base font-semibold text-primary-color">{property}</p>
      <p className="text-base text-secondary-color">{value}</p>
    </div>
  );
}

PlayerInfo.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default PlayerInfo
