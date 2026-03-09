import React from 'react'
import Container from '../common/Container'

const Work = () => {
  return (
   <section className="bg-[#181D21] h-[498px] mt-[75px]">
    <Container>
     <div>
      <div className="pt-[120px] flex justify-around">
      <div className="text-[#FBFBFA] font-openSans font-extrabold text-[46px]  ">Work Showcase</div>
        <div className="text-[#D6A033] font-openSans font-bold text-[24px]">HAIR Cut</div>
        <div className="text-[#FBFBFA] font-openSans font-semibold text-[24px]">HAIR EXTENTSION</div>
        <div className="text-[#FBFBFA] font-openSans font-semibold text-[24px]">HIGHLIGHTS</div>
        <div className="text-[#FBFBFA] font-openSans font-semibold text-[24px]">HAIR COLOURING</div>
      </div>
     </div>
     <div className="flex justify-around">
      <div className="bg-[#C4C4C4] w-[370px] h-[368px]">
      </div>
      <div className="bg-[#C4C4C4] w-[370px] h-[368px]"></div>
      <div className="bg-[#C4C4C4] w-[370px] h-[368px]"></div>
     </div>
    </Container>
   </section>
  )
}

export default Work