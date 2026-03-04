import Button from "../common/Button"
import Container from "../common/Container"
import Flex from "../common/Flex"



const Banner = () => {
  const newLocal = "text-[#BEBBB4] font-Paprika text-[27px] pt-5 font-normal w-150 pb-12.5"
  return (
<section className='bg-gray-800'>
<Container>
<Flex className={"justify-between"}>
<div className="pb-38.75">
    <h1 className="text-[#F7D38A] font-Playfair text-[64px] pt-52 font-bold">WELCOME!</h1>
  <h2 className="text-white font-openSans text-[64px] font-extrabold pt-4">The Best Hair Saloon</h2>
  <p className={newLocal}>We use quality products and the latest styling techniques to bring out your very best. We promises to provide you with 5-star service.</p>
  <Button className={"w-280px h-64px pt-56px"} btnText={"Make Appointment"}/>

</div>
<div className="w-95 h-80 bg-gray-200">

</div>
</Flex>
  
</Container>
</section>
  )
}

export default Banner