import React from 'react'
import PropTypes from 'prop-types'

// {handleAvailableBtn, handleSelecetBtn}
const AvailableContainer = () => {
  return (
    <div className="container mx-auto px-4 mt-24 mb-8 flex justify-between items-center flex-col md:flex-row space-y-6 md:space-y-0">
      <div>
        <h3 className='text-2xl font-bold text-primary-color'>Available Players for you</h3>
      </div>
      <div>
        <button className="px-5 py-2 border border-[#1313131A]/10 rounded-l-lg">
          Available
        </button>
        <button className="px-5 py-2 border border-[#1313131A]/10 rounded-r-lg">
          Selected ({0})
        </button>
      </div>
    </div>
  );
}

AvailableContainer.propTypes = {

}

export default AvailableContainer
