import styled from "styled-components";
import LeafSvg from "../../../public/leaf.svg";

const LeafContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  max-width: 40rem;
  height: auto;
  margin-bottom: 2rem;
`;

const Leaf = () => {
  return (
    <LeafContainer>
      <Image src={LeafSvg} alt="Leaf image not found"></Image>
    </LeafContainer>
  );
};

export default Leaf;
