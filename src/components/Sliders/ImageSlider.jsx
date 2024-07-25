import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageS from "../../../public/Slider2.jpg";
import ImageT from "../../../public/slider1.png";
import ImageU from "../../../public/Sliders_1.png";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { AiOutlineHeatMap } from "react-icons/ai";
import { AiOutlineHdd } from "react-icons/ai";
import { FaHourglassHalf } from "react-icons/fa";
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
const ImgCon = styled.div`
  flex: 1;
`;
const ParagraphP = styled.p`
  font-size: 1.5rem;
  line-height: 2;
  word-spacing: 2px;
  color: #8d8d8d;
  @media only screen and (max-width: 540px) {
    font-size: calc(1.8rem - 1px);
    padding-top: 1rem;
    font-weight: 400;
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
const AchiveMentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #737373;
  text-align: center;
  padding: 5rem;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const Stats = styled.div`
  color: #fff;
  min-height: 20px;
  @media only screen and (max-width: 600px) {
    &:not(:last-child) {
      padding-bottom: 4rem;
    }
  }
`;
const Heading22 = styled.h2`
  font-size: large;
`;
const SpanTag = styled.span`
  font-size: large;
`;
const ParagraphT = styled.p`
  font-size: large;
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
const counterData = [
  { id: 111, numberCounter: "100", duration: 2 },
  { id: 222, numberCounter: "200", duration: 2 },
  { id: 333, numberCounter: "300", duration: 2 },
  { id: 444, numberCounter: "80", duration: 3 },
];

const ImageSlider = () => {
  const [countC, setCountC] = useState(0);
  let num;
  let dur;
  counterData.map((ele, index) => {
    num = ele.numberCounter;
    dur = ele.duration;
  });

  useEffect(() => {
    let start = 0;
    //first three number from the data.
    const end = parseInt(num.substring(0, 3));
    if (start === end) return;
    let totalMilSecDur = dur;
    let incrementTimer = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start = start + 1;
      setCountC(start);
      if (start === end) clearInterval(timer);
    }, incrementTimer);
  }, [num, dur]);

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
      <AchiveMentContainer>
        <Stats>
          <AiOutlineFundProjectionScreen size={"4rem"} />
          <Heading22>
            <SpanTag>{countC}</SpanTag>%
          </Heading22>
          <ParagraphT>Project</ParagraphT>
        </Stats>
        <Stats>
          <RiLightbulbFlashLine size={"4rem"} />
          <Heading22>
            <SpanTag>{countC}</SpanTag>%
          </Heading22>
          <ParagraphT>Ideas</ParagraphT>
        </Stats>
        <Stats>
          <AiOutlineHdd size={"4rem"} />
          <Heading22>
            <SpanTag>{countC}</SpanTag>%
          </Heading22>
          <ParagraphT>Credits</ParagraphT>
        </Stats>
        <Stats>
          <FaHourglassHalf size={"4rem"} />
          <Heading22>
            <SpanTag>{countC}</SpanTag>%
          </Heading22>
          <ParagraphT>Hours</ParagraphT>
        </Stats>
      </AchiveMentContainer>
    </>
  );
};

export default ImageSlider;
