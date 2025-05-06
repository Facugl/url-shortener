import React from 'react'
import ShortenItem from './ShortenItem'

const ShortenUrlList = ({ myShortenUrls }) => {
  return (
    <div className="my-6 space-y-4">
        {myShortenUrls?.map((item) => (
            <ShortenItem key={item.id} {...item} />
        ))}
    </div>
  )
}

export default ShortenUrlList