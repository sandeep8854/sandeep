import styled, { keyframes } from "styled-components";
import ImageL from "../../../public/background-section.png";

const moving_wave = keyframes`
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(-100%);
  }
`;
const ImageSliderParent = styled.div`
  overflow: hidden;
`;
const SvGContainer = styled.div`
  padding: 0;
  margin-bottom: -10px;
  display: flex;
`;

const Image = styled.img`
  height: 50%;
  width: 100%;
  animation: ${moving_wave} 34s linear infinite;
`;

const Wave = () => {
  return (
    <ImageSliderParent>
      <SvGContainer>
        <Image src={ImageL} alt="wave image not found" loading="lazy"></Image>
        <Image src={ImageL} alt="wave image not found" loading="lazy"></Image>
      </SvGContainer>
    </ImageSliderParent>
  );
};

export default Wave;
