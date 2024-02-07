import styled from "styled-components";
// import { CgArrowsScrollV } from "react-icons/cg";
import { FaAngleUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
const ContainerSroll = styled.div``;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  bottom: 2.5rem;
  right: 2.5rem;
  position: fixed;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  background: #44a6d3;
  border: none;
  border-radius: 2px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
`;
const Scroll = () => {
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 340) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  function buttonToTopFunc() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <ContainerSroll>
      {/* {console.log(scrollTop)} */}
      {scrollTop && (
        <Button onClick={buttonToTopFunc}>
          <FaAngleUp />
        </Button>
      )}
    </ContainerSroll>
  );
};

export default Scroll;
