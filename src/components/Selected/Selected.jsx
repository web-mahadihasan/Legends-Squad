import PropTypes from 'prop-types'
import { RiDeleteBinLine } from "react-icons/ri";


const Selected = ({choosePlayerData}) => {
  const {name, role, image} = choosePlayerData;
  return (
    <div className="container mx-auto p-6 border border-primary-color/10 rounded-xl flex items-center justify-between">
      <div className="flex gap-6">
        <img src={image} alt="" className="w-14 h-14 rounded-xl " />
        <div>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>

      <div>
        <button>
          <RiDeleteBinLine size="24px" color="red" />
        </button>
      </div>
    </div>
  );
}

Selected.propTypes = {
  choosePlayerData: PropTypes.array.isRequired
};

export default Selected
