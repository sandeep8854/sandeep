import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
const AchiveMentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #444;
  text-align: center;
  padding: 5rem;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    &:not(:last-child) {
      padding-bottom: 0;
    }
  }
`;
const forPopUp = keyframes`
  from{
    opacity: 0;
    scale: 0.5;
  }
  to{
   opacity: 1;
   scale: 1;
  }
`;
const Stats = styled.div`
  color: #fff;
  width: 22rem;
  padding: 2rem 0 2rem 0;
  border: 1px solid #575757;
  border-radius: 2px;
  background-color: #575757;
  animation: ${forPopUp} 5s linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
  @media only screen and (max-width: 600px) {
    &:not(:last-child) {
      padding-bottom: 4rem;
    }
    width: 30rem;
  }
`;
const Heading22 = styled.h2`
  font-size: large;
`;
const SpanTag = styled.span`
  font-size: large;
`;
const ParagraphT = styled.p`
  font-size: large;
`;

const Counter = ({ iconComponent, initialValue, targetValue, text }) => {
  const [count, setCount] = useState(initialValue);
  const duration = 4000;

  useEffect(() => {
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));
    console.log(interval);

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue, initialValue]);
  return (
    <AchiveMentContainer>
      <Stats>
        <SpanTag>{iconComponent}</SpanTag>
        <Heading22>
          <SpanTag>{count}</SpanTag>%
        </Heading22>
        <ParagraphT>{text}</ParagraphT>
      </Stats>
    </AchiveMentContainer>
  );
};

export default Counter;
