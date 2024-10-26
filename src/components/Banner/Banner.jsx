import PropTypes from "prop-types";
import banner from "../../../public/assets/banner-main.png";
import bgImg from "../../../public/assets/bg-shadow.png";

const Banner = ({ handleClaimCoin }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div
        className="min-h-[600px] bg-cover bg-no-repeat bg-[#131313] rounded-2xl my-6 flex justify-center items-center z-10"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="space-y-6 text-center">
          <img src={banner} alt="" className="mx-auto" />
          <h1 className="text-3xl lg:text-4xl font-bold text-white md:max-w-[80%] mx-auto">
            Assemble Your Legends Squad With Your Icons
          </h1>
          <p className="text-xl text-white/70 font-normal">
            Beyond Boundaries Beyond Limits
          </p>
          <button
            onClick={handleClaimCoin}
            className="text-primary-color font-medium text-xl bg-[#E7FE29] rounded-xl py-2 px-3  hover:bg-opacity-85 duration-300 ring-offset-4 ring-offset-primary-color ring-1 ring-[#E7FE29]"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};


Banner.propTypes = {
  handleClaimCoin: PropTypes.func.isRequired
};

export default Banner;
