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
  background-color: #44a6d3;
  border: 1px solid #44a6d3;
  color: #fff;
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
  @media only screen and (max-width: 500px) {
  }
`;

const Button = () => {
  return (
    <Container className="container-btn">
      <Link
        href="https://github.com/sandeep8854"
        className="main-btn"
        target="_blank"
      >
        ⭐ Star Me On Github
      </Link>
    </Container>
  );
};
export default Button;
