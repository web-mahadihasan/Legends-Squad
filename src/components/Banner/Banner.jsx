import PropTypes from "prop-types";
import banner from "../../../public/assets/banner-main.png";

const Banner = ({ handleClaimCoin }) => {
  return (
    <div
      className="container relative mx-auto px-4 min-h-[600px] bg-cover bg-no-repeat bg-[#131313] rounded-2xl my-6 flex justify-center items-center z-10"
      style={{ backgroundImage: "url('../../../public/assets/bg-shadow.png')" }}
    >
      <div className="space-y-6 text-center">
        <img src={banner} alt="" className="mx-auto" />
        <h1 className="text-3xl lg:text-4xl font-bold text-white">
          Design Your Ultimate Dream 11 Cricket Team Today
        </h1>
        <p className="text-xl text-white/70 font-normal">
          Beyond Boundaries Beyond Limits
        </p>
        <button
          onClick={handleClaimCoin}
          className="text-primary-color font-medium text-xl bg-[#E7FE29] rounded-xl py-2 px-3 ring-[#E7FE29] relative  ring-1 ring-offset-4 ring-offset-primary-color hover:bg-opacity-85 duration-300"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};


Banner.propTypes = {
  handleClaimCoin: PropTypes.func.isRequired
};

export default Banner;
