import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import logo from "/src/assets/Logo.png"
import Button from '../common/Button'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
<div className="sticky top-0 left-0 w-full bg-[#C4C4C4] backdrop-blur-3xl shadow-lg">
  <Container>
    <Flex className="justify-between">
      <div className="py-5">
        <Link to={"/"}>
        <Image imgSrc={logo}/>
        </Link>
        </div>
        <div className=" ">
          <ul className="flex items-center gap-x-16">
            <li className="font-openSans text-black font-semibold text-[18px] hover:text-btnClr">
              <Link to={"/"}>Home</Link></li>
            <li className="font-openSans text-black font-semibold text-[18px] hover:text-btnClr">
            <Link to={"About"}>About</Link>
            </li>
            <li className="font-openSans text-black font-semibold text-[18px] hover:text-btnClr">
              <Link to={"service"}>Service</Link>
            </li>
            <li className="font-openSans text-black font-semibold text-[18px] hover:text-btnClr">Portfolio</li>
            <li className="font-openSans text-black font-semibold text-[18px] hover:text-btnClr">Price</li>
            <li className="font-openSans text-black font-semibold text-[18px] hover:text-btnClr">Blog</li>
          </ul>
        </div>
       <div className="">
        <Button btnText={"Contuct Us"}/>
       </div>
      
    </Flex>
  </Container>
</div>
  
 
  )
}

export default Header
