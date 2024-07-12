import styled from "styled-components";

const Container = styled.div`
  margin-top: 4rem;
  @media only screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Link = styled.a`
  background-color: #ffffff;
  border: 1px solid #44a6d3;
  color: #44a6d3;
  font-weight: 500;
  line-height: 1.1;
  width: max-content;
  padding: 10px 6px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 16px;
  &:hover {
    background-color: #44a6d3;
    color: #ffffff;
    transition: all 650ms ease-in-out;
  }
  @media only screen and (max-width: 500px) {
    border-radius: 0px;
    margin: 0 2rem 0 2rem;
    width: 85%;
    padding: 1.5rem 0 1.5rem 0;
  }
`;

const Button = () => {
  return (
    <Container className="container-btn">
      <Link
        href="https://github.com/sandeep8854/sandeep"
        className="main-btn"
        target="_blank"
      >
        ⭐ Star Me On Github
      </Link>
    </Container>
  );
};
export default Button;
