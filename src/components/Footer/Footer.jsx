
const Footer = () => {
  return (
    <div className="bg-[#06091A] min-h-[750px]">
      <div className="container mx-auto px-4 pt-[250px]">
        <img
          src="../../../public/assets/logo-footer.png"
          alt=""
          className="mx-auto"
        />
        <div className="flex flex-col md:flex-row justify-between my-16">
          <nav className="flex flex-col flex-1">
            <h6 className="footer-title">Services</h6>
            <p className="max-w-[60%]">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <div className="flex flex-col flex-1 md:flex-row justify-between">
            <nav className="flex flex-col flex-1 items-start">
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <form className="flex-1 justify-end">
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="form-control w-80">
                <label className="label">
                  <span className="label-text">Enter your email address</span>
                </label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item"
                  />
                  <button className="btn btn-primary join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;