import footer from "../../../public/assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="bg-[#06091A] min-h-[750px]">
      <div className="container mx-auto px-4 pt-[250px] pb-10">
        <img src={footer} alt="" className="mx-auto w-48" />
        <div className="flex flex-col lg:flex-row justify-between mt-16 space-y-6 lg:space-y-0">
          <nav className="flex flex-col flex-1">
            <h6 className="text-white text-lg font-semibold">About us</h6>
            <p className="max-w-[70%] md:max-w-[40%] text-white/70 font-normal text-base mt-3">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <div className="flex flex-col flex-1 md:flex-row justify-between space-y-6 lg:space-y-0">
            <nav className="flex flex-col flex-1 items-start space-y-3">
              <h6 className="text-white text-lg font-semibold">Company</h6>
              <a className="link link-hover text-white/90 text-base">
                About us
              </a>
              <a className="link link-hover text-white/90">Contact</a>
              <a className="link link-hover text-white/90">Jobs</a>
              <a className="link link-hover text-white/90">Press kit</a>
            </nav>
            <form className="flex-1 justify-end">
              <h6 className="text-white text-lg font-semibold">Newsletter</h6>
              <fieldset className="form-control">
                <label className="label">
                  <span className="text-white/90">
                    Enter your email address
                  </span>
                </label>
                <div className="join w-full">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input border-none join-item"
                  />
                  <button className="btn bg-gradient-to-r from-[#f8c65b] to-[#c874aa] text-primary-color join-item hover:opacity-90 duration-300">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="border-t border-gray-600">
        <p className="text-center py-5 text-white/60 text-sm">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
