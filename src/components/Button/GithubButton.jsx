import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
const ContainerGit = styled.div``;
const Anchor = styled.a`
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
