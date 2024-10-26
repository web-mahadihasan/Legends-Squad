import PropTypes from 'prop-types'
import { FaUserAlt } from "react-icons/fa";
import PlayerInfo from './PlayerInfo';
import { HiOutlineCurrencyDollar } from "react-icons/hi";


const Players = ({ playerData, handleChoosePlayer }) => {
  const {
    name,
    country,
    country_flag,
    image,
    role,
    batting_type,
    bowling_type,
    bidding_price,
    icc_rank,
    isTopRated,
    ratings,
  } = playerData;

  return (
    <div>
      <div className=" bg-base-100 p-4 border rounded-xl">
        <figure>
          <img
            src={image}
            alt={`${name} Picture`}
            className="rounded-xl h-[200px] w-full"
          />
        </figure>
        <div className="space-y-3 mt-4">
          <h2 className="card-title">
            <span className="align-middle">
              <FaUserAlt />
            </span>
            {name}
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <img src={country_flag} alt="" className="w-8 h-5" />
              <p className="text-secondary-color/60 text-sm font-normal">
                {country}
              </p>
            </div>
            <div>
              <p className="py-1 px-4 rounded-md bg-secondary-color/5 text-primary-color text-sm font-normal">
                {role}
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <PlayerInfo property={"Ratting"} value={ratings} />
          <PlayerInfo property={"Batting Style"} value={batting_type} />
          <PlayerInfo property={"Bowling Style"} value={bowling_type} />
          <PlayerInfo property={"ICC Rank"} value={icc_rank} />
          <PlayerInfo
            property={"Top Rated"}
            value={isTopRated ? "Top-rated" : "No"}
          />

          <div className="flex justify-between items-center ">
            <p className="flex items-center gap-2 text-base font-semibold text-primary-color">
              <span>Price:</span>
              <span className="flex items-center gap-[2px] align-middle">
                <HiOutlineCurrencyDollar
                  size={"20px"}
                  className="text-orange-500"
                />
                {bidding_price}
              </span>
            </p>
            <button onClick={() => handleChoosePlayer(playerData)} className="py-2 px-6 text-sm text-primary-color border border-primary-color/10 rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Players.propTypes = {
  playerData: PropTypes.object.isRequired,
  handleChoosePlayer: PropTypes.func.isRequired
};

export default Players
