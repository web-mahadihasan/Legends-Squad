import PropTypes from 'prop-types'

const Players = ({playerData}) => {
  return (
    <div>
      <div className=" bg-base-100 p-4 border rounded-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex justify-between items-center ">
            <p>Price</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Players.propTypes = {
  playerData: PropTypes.object.isRequired
}

export default Players
