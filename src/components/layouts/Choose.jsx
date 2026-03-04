import React from "react";
import Container from "../common/Container";

const Choose = () => {
  return (
    <section>
      <Container>
        <div>
          <h3 className="text-[#363024] font-openSans font-extrabold text-[48px] text-center pt-[100px]">
            Our Services
          </h3>
          <p className="text-[#524D43] font-paprika font-normal text-[18px] text-center pt-[20px] mx-auto w-160">Whether you are looking for a quick beach side gateway or a pampering day for yourself, we have hair treatments to meet your needs. All of our services are specially designed for restorative, recovery and relaxation.</p>
        </div>
        <div className="flex justify-between">
            <div className="text-7 text-black  pt-8 font-bold font-openSans"><h1>HAIR Cut</h1>
            <p className="text-black text-[20px] pt-4 w-[325px] h-[118px] font-normal font-paprika">Aromatherapy is just another thing to look and feel younger, more energetic and attractive in your body.
</p>
                <div> <h3 className="text-black text-7 font-bold font-openSans pt-10">HIGHLIGHTS</h3>
                <p className="text-black text-[18px] font-normal font-paprika w-[325px] h-[128px] pt-4">Aroma therapy is just another thing to look and feel younger, more energetic and attractive in your body.</p>
</div>
            </div>
            <div className="text-7 text-[#D6A033] font-openSans font-extrabold pt-8 ">$20
              <div  className="text-7 text-[#D6A033] font-openSans font-extrabold pt-[158px] "> $90</div>
            </div>
            <div className="text-[#363024] text[28px] font-bold font-openSans pt-[32px]"><h3>HAIR EXTENTSIONS</h3>
            <p className="text-[#524D43] font-normal font-paprika w-[325px] h-[128px] pt-4 ">The Namaste Massage is a deep, fluid, rhythmic massage that use different part of the body at the same time.</p>
                <div>
                  <h3 className="text-[#363024] text[28px] font-bold font-openSans pt-[32px]" >HAIR COLOURING</h3>
                  <p className="text-[#524D43] font-normal font-paprika w-[325px] h-[128px] pt-4 " >A wide array of facial modalities ranging from European to Thai and Japanese techniques that work.</p>
                </div>
            </div>
            <div className="text-7 text-[#D6A033] font-openSans font-extrabold pt-8 ">$230
                <div className="text-7 text-[#D6A033] font-openSans font-extrabold pt-[158px]">$40</div>
            </div>
          
        </div>
        
        
      </Container> 
    </section>
  );
};

export default Choose;
