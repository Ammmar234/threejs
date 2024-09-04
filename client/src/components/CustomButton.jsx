import { color } from 'framer-motion'
import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
const CostumeButton = ({CustomStyles , type , handleClick, tittle}) => {
const snap = useSnapshot(state)
  const generateStyle = (type) => {
  switch (type) {
    case 'primary':
      return { backgroundColor: snap.color , color: 'white' }
    case'secondary':
      return { backgroundColor: '#000', color: '#fff' }
    default:
      return {}
  }

}
  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${CustomStyles}`}
      onClick={handleClick}
      style={generateStyle(type)}
    > {tittle} </button>
  )
}

export default CostumeButton
