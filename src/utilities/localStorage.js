const getItemFromLs = () => {
  const items = localStorage.getItem('Email')
  return items;
}


const setItemToLs = (item) => {
  const setItem = localStorage.setItem('Email', item)
}

export {getItemFromLs, setItemToLs}