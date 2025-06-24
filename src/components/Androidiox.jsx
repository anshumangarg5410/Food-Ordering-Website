import React from 'react'
import bg from '../assets/asd.png'
import iosprop from '../assets/ios.png'
import ios from '../assets/androi.png'
import andr from '../assets/iosiosios.png'


function Androidiox() {

    const yellowbg = {backgroundImage: `url(${bg})`}
    const iosbg = {backgroundImage: `url(${iosprop})`}
    const anddow = {backgroundImage: `url(${ios})`}
    const iosdow = {backgroundImage: `url(${andr})`}

  return (
    <div className='h-[80vh] w-full flex justify-center gap-[60px] items-center bg-no-repeat bg-cover bg-center' style={yellowbg}>
        <div className="div1 flex h-[80%] w-[40%] flex-col justify-center items-center">
            <div className="header1 flex w-full flex-col justify-center items-center ">
                <p className='font-bold text-[60px] text-white'>Available for both</p>
                <p className='font-bold text-[60px] text-white'>Android and IOS</p>
            </div>
            <div className="subhead h-[40%] w-full flex justify-center items-center">
                <div className="and w-full h-[40%] bg-contain bg-no-repeat bg-center" style={anddow}></div>
                <div className="ios w-full h-[35%] bg-contain bg-no-repeat bg-center" style={iosdow}></div>
            </div>
        </div>
        <div className="div2 h-[80%] w-[40%] bg-contain bg-no-repeat bg-center" style={iosbg}></div>
    </div>
  )
}

export default Androidiox
