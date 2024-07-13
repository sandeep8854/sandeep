import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
const ContainerGit = styled.div``;
const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* background-color: #f179a7; */
  padding: 1rem 1.3rem;
  text-decoration: none;
  color: #f179a7;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  letter-spacing: 1px;
  border: 1px solid #fbd7e5;
  &:hover {
    background-color: #fbd7e5;
    transition: all 650ms ease-in-out;
    border: 1px solid #fbd7e5;
  }
  @media only screen and (max-width: 500px) {
    padding: 1.5rem 4rem;
    border-radius: 0px;
  }
`;
const GithubButton = () => {
  return (
    <ContainerGit>
      <Anchor>
        <FaGithub />
        GitHub
      </Anchor>
    </ContainerGit>
  );
};

export default GithubButton;
