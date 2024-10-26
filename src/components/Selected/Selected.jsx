import PropTypes from 'prop-types'
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineCurrencyDollar } from "react-icons/hi";


const Selected = ({ choosePlayerData, handleRemovePlayer }) => {
  const { player_id, name, role, image, bidding_price } = choosePlayerData;
  return (
    <div className="mb-6 py-4 px-6 bg-gray-50 border border-primary-color/10 rounded-xl flex items-center justify-between">
      <div className="flex gap-6">
        <img src={image} alt="" className="w-16 h-18 rounded-lg object-cover " />
        <div>
          <h4 className="font-bold text-xl text-primary-color">{name}</h4>
          <p className="text-base text-secondary-color">{role}</p>
          <p className="text-base text-secondary-color flex gap-1">
            <HiOutlineCurrencyDollar
              size={"20px"}
              className="text-orange-500"
            />
            {bidding_price}
          </p>
        </div>
      </div>

      <div>
        <button onClick={() => handleRemovePlayer(player_id)} className="p-2">
          <RiDeleteBinLine size="24px" color="red" />
        </button>
      </div>
    </div>
  );
};

Selected.propTypes = {
  choosePlayerData: PropTypes.object.isRequired,
  handleRemovePlayer: PropTypes.func.isRequired
};

export default Selected
