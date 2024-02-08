import styled from "styled-components";
import { PiLinkSimpleHorizontalBreak } from "react-icons/pi";
const ContainerLink = styled.div``;
const AnchorDemo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #f179a7;
  padding: 1rem 1.3rem;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  letter-spacing: 1px;
`;

const LinkButton = () => {
  return (
    <ContainerLink>
      <AnchorDemo>
        <PiLinkSimpleHorizontalBreak />
        Demo
      </AnchorDemo>
    </ContainerLink>
  );
};

export default LinkButton;
