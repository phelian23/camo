import React, { useState, useEffect } from 'react'
import dataSlider from './dataSlider'

const Slider = () => {
  const [slider, setSlider] = useState(0)

  const nextSlide = () => {
    if (slider === dataSlider.length - 1) {
      setSlider(0)
    } else {
      setSlider(slider + 1)
    }
  }

  const changeSlider = () => {
    setInterval(() => {
      nextSlide()
    }, 5000)
  }

  useEffect(() => {
    changeSlider()
  })

  const moveDot = (index) => {
    setSlider(index)
  }

  return (
    <div>
      <div className="slider-cont">
        <div className="slider-img-cont">
          <img src={dataSlider[slider].image} alt="" />
        </div>
        <div className="slider-dot-cont">
          {dataSlider.map((item, index) => {
            return (
              <div
                key={index}
                className={slider === index ? 'dot active' : 'dot'}
                onClick={() => moveDot(index)}
              ></div>
            )
          })}
        </div>
      </div>  
    </div>
  )
}

export default Slider