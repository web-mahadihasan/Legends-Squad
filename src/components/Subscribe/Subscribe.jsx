import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getItemFromLs, setItemToLs } from "../../utilities/localStorage";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = (email) => {
    if (!email) {
      toast.warn(`Required a valid Email`, {
        position: "top-center",
        theme: "colored",
        autoClose: 2000,
      });
      return
    } 
    if(!isValidEmail(email)){
      toast.warn(`Your enter Email is invalid`, {
        position: "top-center",
        theme: "colored",
        autoClose: 2000,
      });
      return
    }
    setItemToLs(email)
    toast.success(`You have successfully subscribe as a Newsletter using ${email}`, {
      position: "top-center",
      theme: "colored",
      autoClose: 2000,
    });
  };

  useEffect(()=> {
    const savedEmail = getItemFromLs()
     toast.success(`Welcome Back ${savedEmail}!!`, {
       position: "top-center",
       theme: "colored",
       autoClose: 2000,
     });
  }, [])

  return (
    <div className="container mx-auto px-5 backdrop-blur-sm border border-white/50 flex justify-center items-center py-5 rounded-2xl relative -mb-[180px] bg-white/10 ">
      <div
        className="flex justify-center items-center w-full py-20 px-3 rounded-2xl border border-primary-color/10 bg-no-repeat bg-white"
        style={{
          backgroundImage: `url('../../../public/assets/news1.png'), url('../../../public/assets/news2.png')`,
          backgroundPosition: "left bottom, top right",
        }}
      >
        <div className="text-center space-y-5">
          <h1 className="text-3xl font-bold text-primary-color">
            Subscribe to our Newsletter
          </h1>
          <p className="text-lg font-medium text-secondary-color">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name=""
              id=""
              className="border flex-1 border-[#13131326]/15 rounded-md px-4 py-3 w-full text-secondary-color"
              placeholder="Enter your email"
            />
            <button
              onClick={() => handleSubscribe(email)}
              className="py-3 px-4 rounded-xl font-bold text-primary-color bg-gradient-to-l from-[#f8c65b] to-[#c874aa] hover:opacity-90 duration-300"
            >
              Subscribe
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

// Subscribe.propTypes = {
//   // handleSubscribe: PropTypes.func.isRequired,
// };

export default Subscribe;