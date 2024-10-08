import { IoMdSend } from "react-icons/io";
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #fff;
  font-weight: 400;
  /* line-height: 1.1; */
  width: max-content;
  padding: 1rem 3rem;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 1.5rem;
  outline: none;
  border: 1px solid #f1719a;
  &:hover {
    background-color: #fff;
    color: #f1719a;
    border: 1px solid #f1719a;
    transition: all 650ms ease-in-out;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    padding: 1.5rem 3rem;
    border-radius: 0px;
  }
`;

const ButtonSubmit = () => {
  return (
    <Container className="container-btn">
      <Buttonn>
        Submit <IoMdSend />
      </Buttonn>
    </Container>
  );
};
export default ButtonSubmit;
