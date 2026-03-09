import React from 'react'
import Container from '../common/Container'

const OurProduct = () => {
  return (
    <section className="bg-[#FCFBF9] w-[1920px] h-[835px]">
        <Container>
            <div>
                <h1 className="text-[#363024] font-openSans font-extrabold text-[48px] pt-[150px]">Our Product</h1>
               <div className="flex justify-end gap-4 ">
                <div className="bg-[#524D43] w-[56px] h-[56px]"></div>
                <div className="bg-[#D6A033] w-[56px] h-[56px]"></div>
                </div>
            </div>
       <div className='flex justify-between pt-[64px]'>
        
        <div className='bg-[#C4C4C4] w-[270px] h-[329px]'>
          
        </div>
                 
             
        <div className='bg-[#C4C4C4] w-[270px] h-[329px]'></div>
        <div className='bg-[#C4C4C4] w-[270px] h-[329px]'></div>
        <div className='bg-[#C4C4C4] w-[270px] h-[329px]'></div>
        

       </div>

        </Container>
    </section>
  )
}

export default OurProduct
