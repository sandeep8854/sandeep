import styled from "styled-components";
import ImageL from "../../../public/background-section.png";

const SvGContainer = styled.div`
  padding: 0;
  margin-bottom: -10px;
`;

const Image = styled.img`
  height: 50%;
  width: 100%;
`;

const Wave = () => {
  return (
    <SvGContainer>
      <Image src={ImageL} alt="wave image not found" loading="lazy"></Image>
    </SvGContainer>
  );
};

export default Wave;
