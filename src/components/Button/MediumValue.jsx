import styled from "styled-components";
const ContainerMedium = styled.div`
  margin-bottom: 1rem;
`;
const MediumSpan = styled.span`
  background-color: #94d82d;
  display: inline;
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 15px !important;
  text-transform: uppercase;
`;
const MediumValue = () => {
  return (
    <ContainerMedium>
      <MediumSpan>Medium Value</MediumSpan>
    </ContainerMedium>
  );
};
export default MediumValue;
