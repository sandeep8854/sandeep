import styled from "styled-components";
import { PiLinkSimpleHorizontalBreak } from "react-icons/pi";
const ContainerLink = styled.div``;
const AnchorDemo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #f294b8;
  padding: 1rem 1.3rem;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  letter-spacing: 1px;
  border: 1px solid #f294b8;
  &:hover {
    background-color: #fbd7e5;
    color: #f1719a;
    border: 1px solid #f1719a;
    transition: all 650ms ease-in-out;
  }
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
