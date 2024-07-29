import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ImageS from "../../../public/Slider2.jpg";
import ImageT from "../../../public/slider1.png";
import ImageU from "../../../public/Sliders_1.png";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { PiDotsThreeVertical } from "react-icons/pi";

const ArrowConntainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 2rem;
`;

const MainContainer = styled.div`
  position: relative;
  margin: 0 4rem 0 4rem;
  border-left: 2px solid rgb(242, 148, 184) !important;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  @media only screen and (max-width: 540px) {
    margin-top: 2rem;
    margin-left: calc(2rem + 5px);
    margin-right: calc(2.4rem - 9px);
  }
`;
const Heading2 = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #f294b8;
  padding-top: 2rem;
`;
const ImageAndParaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem 0 2rem;
  gap: 2rem;
  @media only screen and (max-width: 540px) {
    flex-direction: column-reverse;
    margin: 0 2rem 0 2rem;
  }
`;
const ParaFor100 = styled.div`
  flex: 1.3;
`;
const forPopUp = keyframes`
  from{
    opacity: 0;
    scale: 0.5;
  }
  to{
   opacity: 1;
   scale: 1;
  }
`;
const ImgCon = styled.div`
  flex: 1;
  animation: ${forPopUp} 5s linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
`;
const ParagraphP = styled.p`
  font-size: 1.5rem;
  line-height: 2;
  word-spacing: 2px;
  color: #8d8d8d;
  @media only screen and (max-width: 540px) {
    font-size: calc(1.8rem - 1px);
    padding-top: 1rem;
    font-weight: 500;
  }
`;
const ImageFor = styled.img`
  /* width: 100%;
  max-width: 100%;
  height: auto; */
  max-width: 350px;
  min-height: 120px;
  max-height: auto;
`;
const LeftArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 3px;
  font-size: 4rem;
  color: #8d8d8d;
  z-index: 1;
  cursor: pointer;
`;
const RightArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -24%);
  right: 10px;
  font-size: 4rem;
  color: #8d8d8d;
  z-index: 1;
  cursor: pointer;
`;
const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
const DotTask = styled.div`
  margin: 0 3px;
  font-size: 2rem;
  cursor: pointer;
`;

const imageArray = [ImageS, ImageT, ImageU];
const SliderData = [
  {
    heading: "Web Development",
    textData:
      "I leverage JavaScript libraries like ReactJS to provide you with exceptional ---- value for your investment. My services encompass both front-end and back-end development, delivering a comprehensive solution that covers all aspects of your project.",
  },
  {
    heading: "Content Creator",
    textData:
      "Lorem ipsum dolor sit amet, consectetur adipisicinmelit. Exdelectus qui asperiores inventore suscipit libero optio, laborepossimus at quis! Lorem ipsum dolor sit amet consectetur adipisicingelit. Id, maiores1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi",
  },
  {
    heading: "Problem Solver",
    textData:
      "Lorem ipsum dolor sit amet, consectetur adipisicinmelit. Exdelectus qui asperiores inventore suscipit libero optio, laborepossimus at quis! Lorem ipsum dolor sit amet consectetur adipisicingelit. Id, maiores2. maiores1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function FunGoToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? SliderData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  function FunGoToNext() {
    const isLastSlide = currentIndex === SliderData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  function goToSlide(indexS) {
    setCurrentIndex(indexS);
  }
  return (
    <>
      <ArrowConntainer>
        <LiaLongArrowAltDownSolid size={"4rem"} color={"#868686"} />
        <PiDotsThreeVertical size={"4rem"} color={"#868686"} />
      </ArrowConntainer>
      <MainContainer>
        <Heading2>{SliderData[currentIndex].heading}</Heading2>
        <ImageAndParaContainer>
          <ParaFor100>
            <ParagraphP>{SliderData[currentIndex].textData}</ParagraphP>
          </ParaFor100>
          <ImgCon>
            <ImageFor
              src={`${imageArray[currentIndex]}`}
              alt="Slider image not found"
              loading="lazy"
            ></ImageFor>
          </ImgCon>
        </ImageAndParaContainer>
        <LeftArrowContainer>
          <LiaLongArrowAltLeftSolid onClick={FunGoToPrevious} />
        </LeftArrowContainer>
        <RightArrowContainer>
          <LiaLongArrowAltRightSolid onClick={FunGoToNext} />
        </RightArrowContainer>
      </MainContainer>
      <DotContainer>
        {SliderData.map((items, indexS) => (
          <DotTask key={indexS} onClick={() => goToSlide(indexS)}>
            <GoDotFill color={"#868686"} />{" "}
          </DotTask>
        ))}
      </DotContainer>
    </>
  );
};

export default ImageSlider;
