import React from 'react'

const CardImageComp = ({imgUrl, imgTitle}) => {
  return (
    <div className="card">
      <img src={imgUrl} alt={imgTitle} />
    </div>
  )
}

export default CardImageComp
