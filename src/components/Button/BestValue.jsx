import styled from "styled-components";
const ContainerBest = styled.div`
  margin-bottom: 1rem;
`;
const BestSpan = styled.span`
  background-color: #51cf66;
  display: inline;
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 15px !important;
  text-transform: uppercase;
`;
const BestValue = () => {
  return (
    <ContainerBest>
      <BestSpan>Best Value</BestSpan>
    </ContainerBest>
  );
};
export default BestValue;
