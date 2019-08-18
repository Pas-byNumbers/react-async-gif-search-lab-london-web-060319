import React from 'react'

const GifList = ({ gifArr }) => {

 

  const renderGifs = () => {
    return gifArr.map(gif => {
      return <img src={gif.images.original.url} alt={gif.title} key={gif.slug} />
    })
  }

 
  return (
    <div>
      {renderGifs()}
    </div>
  )
}

export default GifList
