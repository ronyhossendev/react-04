import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import logo from "/src/assets/Logo.png"
import Button from '../common/Button'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
<div className="bg-gray-400 py-5">
  <Container>
    <Flex className="justify-between">
      <div className="">
        <Link to={"/"}>
        <Image imgSrc={logo}/>
        </Link>
        </div>
        <div className=" ">
          <ul className="flex items-center gap-x-16">
            <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">
              <Link to={"/"}>Home</Link></li>
            <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">
            <Link to={"About"}>About</Link>
            </li>
            <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">Service</li>
            <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">Portfolio</li>
            <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">Price</li>
            <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">Blog</li>
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
