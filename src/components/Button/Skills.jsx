import styled from "styled-components";
const ContainerBest = styled.div`
  margin-bottom: 1rem;
`;
const BestSpan = styled.span`
  margin-left: 1rem;
  background-color: #32a4e7;
  display: inline-block;
  padding: 1px 6px;
  font-size: 1rem;
  text-transform: uppercase;
  color: #fff;
  border-radius: 13px;
  font-weight: 600;
  @media only screen and (max-width: 650px) {
    font-size: 1.3rem;
    font-weight: 900;
  }
`;
const Skills = () => {
  return (
    <ContainerBest>
      <BestSpan>HTML</BestSpan>
      <BestSpan>css</BestSpan>
      <BestSpan>reactJS</BestSpan>
      <BestSpan>Styled Component</BestSpan>
    </ContainerBest>
  );
};
export default Skills;
