import styled from "styled-components";
const Container = styled.div`
  margin-top: 4rem;
  @media only screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
const Buttonn = styled.button`
  background-color: rgb(242, 148, 184);
  /* border: 1px solid #44a6d3; */
  color: #fff;
  font-weight: 400;
  line-height: 1.1;
  width: max-content;
  padding: 10px 6px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 14px;
  outline: none;
  border: none;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ButtonSubmit = () => {
  return (
    <Container className="container-btn">
      <Buttonn>Submit</Buttonn>
    </Container>
  );
};
export default ButtonSubmit;
