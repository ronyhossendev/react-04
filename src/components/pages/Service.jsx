import Button from "../common/Button";
import Container from "../common/Container";

const Service = () => {
  return (
    <section className="bg-[#FDFDFD] w-full h-150">
      <Container>
        <div className="flex">
          <div>
            <div className=" bg-[#C4C4C4] w-[173px] h-[160px] mt-[100px]"></div>
            <div className=" bg-[#C4C4C4] w-[173px] h-[160px] mt-6"></div>
            <div className=" bg-[#C4C4C4] w-43.25 h-[160px] mt-6"></div>
          </div>

          <div className="bg-[#C4C4C4] w-[458px] h-[528px] mt-[100px] ml-6 "></div>
          <div className="ml-[62px]">
            {" "}
            <h3 className="text-[#363024] font-Open Sans w-[431px] font-extrabold text-[48px] mt-[100px] pb-5 ">
              We're Here To Service Your Hair Care Needs
            </h3>
            <p className="text-[#524D43] font-paprika font-normal text-[20px] w-[649px] leading-[32px]">
              House of Hair Salon & Spa is one of Brooklyn's most trusted
              salons. Whether you’re looking for a completely new style or want
              to enhance your existing look, our talented teams are here to make
              it happen.
            </p>
            <Button className={"mt-6"} btnText={"Learn More"} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Service;
