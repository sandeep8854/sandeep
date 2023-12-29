import styled from "styled-components";
const ContainerSimple = styled.div`
  margin-bottom: 1rem;
`;
const SimpleSpan = styled.span`
  background-color: #ffd43b;
  display: inline;
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 15px !important;
  text-transform: uppercase;
`;
const SimpleValue = () => {
  return (
    <ContainerSimple>
      <SimpleSpan>Simple Value</SimpleSpan>
    </ContainerSimple>
  );
};
export default SimpleValue;
