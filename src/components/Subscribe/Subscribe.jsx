import React from 'react';

const Subscribe = () => {
  return (
    <div className="container mx-auto px-5 backdrop-blur-2xl border border-red-400 mb-20 flex justify-center items-center py-5 rounded-xl">
      <div
        className="flex justify-center items-center border border-red-500 w-full py-20 rounded-xl"
        style={{
          backgroundImage: `url('../../../public/assets/news1.png'), url('../../../public/assets/news2.png')`,
        }}
      >
        <div className="text-center">
          <h1>Subscribe to our Newsletter</h1>
          <p>Get the latest updates and news right in your inbox!</p>
          <div>
            <input type="text" name="" id="" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;