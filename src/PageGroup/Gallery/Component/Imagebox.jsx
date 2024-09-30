import React, { useState } from 'react'
import './imagebox.css'

const Imagebox = ({ title, num }) => {

  return (
    <>
      {
        title.slice(0, num).map((item) => (
          <div class="imgbox">
            <img class="imgbox-img" src={item.img} alt="" />
            <div class="imgbox-content text-center mt-2">
              <b><span class="text-2xl text-black-600">{item.txt}<span class="text-green-deep">,{item.year}</span></span></b>
            </div>
          </div>
        ))}
    </>
  )
}

export default Imagebox