import styled, { keyframes } from "styled-components";
import ImageL from "../../../public/background-section.png";
// import Float_1 from "../../../public/float_1.png";
// import Float_2 from "../../../public/float_2.png";
// // import Float_3 from "../../../public/float_3.png";
// import Float_4 from "../../../public/float_4.png";
// import Float_5 from "../../../public/float_5.png";
// // import Float_6 from "../../../public/float_6.png";
// import Float_7 from "../../../public/float_7.png";
// import Float_8 from "../../../public/float_8.png";
// import Float_9 from "../../../public/float_9.png";
// import Float_10 from "../../../public/float_10.png";
// // import Float_11 from "../../../public/float_11.png";
// import Float_12 from "../../../public/float_12.png";
// import Float_13 from "../../../public/float_13.png";

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
  animation: ${moving_wave} 45s linear infinite;
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  background-size: cover;
`;

const Wave = () => {
  return (
    <ImageSliderParent>
      <SvGContainer>
        <Image src={ImageL} alt="wave image not found"></Image>
        <Image src={ImageL} alt="wave image not found"></Image>
        <Image src={ImageL} alt="wave image not found"></Image>

        {/* <Image src={Float_10} alt="wave image not found"></Image>
        <Image src={Float_9} alt="wave image not found"></Image>
        <Image src={Float_13} alt="wave image not found"></Image>
        <Image src={Float_8} alt="wave image not found"></Image>
        <Image src={Float_10} alt="wave image not found"></Image>
        <Image src={Float_9} alt="wave image not found"></Image>
        <Image src={Float_13} alt="wave image not found"></Image>
        <Image src={Float_8} alt="wave image not found"></Image>
        <Image src={Float_10} alt="wave image not found"></Image>
        <Image src={Float_9} alt="wave image not found"></Image>
        <Image src={Float_13} alt="wave image not found"></Image>
        <Image src={Float_12} alt="wave image not found"></Image> */}
      </SvGContainer>
    </ImageSliderParent>
  );
};

export default Wave;
