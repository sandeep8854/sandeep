import styled from "styled-components";
const ContainerGit = styled.div``;
const Anchor = styled.a`
  background-color: #f179a7;
  padding: 1rem 1.3rem;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
`;
const GithubButton = () => {
  return (
    <ContainerGit>
      <Anchor>GitHub</Anchor>
    </ContainerGit>
  );
};

export default GithubButton;
