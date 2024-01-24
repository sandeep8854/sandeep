import styled from "styled-components";
const ContainerLink = styled.div``;
const AnchorDemo = styled.a`
  background-color: #f179a7;
  padding: 1rem 1.3rem;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
`;

const LinkButton = () => {
  return (
    <ContainerLink>
      <AnchorDemo>Demo</AnchorDemo>
    </ContainerLink>
  );
};

export default LinkButton;
