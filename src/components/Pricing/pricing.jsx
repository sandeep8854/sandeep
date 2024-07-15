import styled, { keyframes } from "styled-components";
import Project from "../../../public/project_find.png";
import AccImage from "../../../public/accforSideImage.png";
import { useState } from "react";
import SimpleValue from "../Button/SimpleValue";
import MediumValue from "../Button/MediumValue";
import BestValue from "../Button/BestValue";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Leaf from "../Leaf/Leaf.jsx";

const float = keyframes`
from{
transform: translate(0px,0px);
}
65%{
  transform: translate(0px,10px);
}
to{
  transform: translate(0px,0px);
}
`;

const Container = styled.div`
  margin-top: 3rem;
  overflow-x: hidden;
`;
const Headingcont = styled.div`
  margin: 3rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;
const SpanIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.5rem;
  width: 5.5rem;
  border-radius: 50%;
  font-size: 3.5rem;
  color: #ea4c89;
  background-color: rgb(250, 212, 227);
  transition: background-color 225ms cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
`;
const Heading1 = styled.h1``;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5rem 0 5rem;
  @media only screen and (max-width: 540px) {
    flex-direction: column;
    margin: 0 2rem 0 2rem;
  }
`;
const ImageSection = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  max-width: 40rem;
  height: auto;
  animation: ${float} 3s ease-in-out infinite;
`;

const AboutBusiness = styled.div`
  flex: 2;
`;

const Paragraph = styled.p`
  max-width: 50rem;
  padding: 0 2rem 0 2rem;
  font-size: 1.6rem;
  color: #4d4d4d;
  line-height: 1.8;
  word-spacing: 5px;
  @media only screen and (max-width: 540px) {
    font-size: 13px;
    width: 100%;
    padding: 0;
  }
`;

const Cheers = styled.span`
  font-size: 2rem;
  padding-left: 1.7rem;
  font-weight: 600;
  color: #f294b8;
  @media only screen and (max-width: 540px) {
    width: 100%;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 0 2rem 0 2rem;
  transition: all 650ms ease-in-out;
  @media only screen and (max-width: 581px) {
    margin-top: 2rem;
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;
const Accordian = styled.div`
  flex: 1.2;
  align-items: center;
  margin: 0 0 0 2rem;
  transition: all 650ms ease-in-out;

  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`;
const Item = styled.div`
  background-color: #fff;
  transition: all 650ms ease-in-out;
  /* margin-bottom: 1.5rem;
  padding: 1rem 0rem; */
`;
const Title = styled.div`
  color: #5f5f5f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 2px solid rgb(242, 148, 184);
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 2rem;
  /* transition: all 0.5s cubic-bezier(0, 1, 0, 1); */
  transition: all 650ms ease-in-out;
`;
const Para = styled.p`
  font-size: 1.6rem;
  transition: all 650ms ease-in-out;
  @media only screen and (max-width: 540px) {
    font-size: 14px;
  }
`;
const Spann = styled.span`
  font-weight: 400;
  min-height: 30px;
  min-width: 30px;
  width: 30px;
  height: 30px;
  background-color: #fad4e3;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  transition: all 650ms ease-in-out;
`;
const ContectAndPrice = styled.div`
  /* margin-top: 2rem; */
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 2px solid rgb(242, 148, 184);
  padding: 10px 15px;
  border-radius: 4px;

  transition: all 650ms ease-in-out;
  @media only screen and (max-width: 540px) {
    font-size: 1.2rem;
  }
`;
const Rupees = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  transition: all 650ms ease-in-out;
  @media only screen and (max-width: 540px) {
    font-size: 15px;
  }
`;
const Content = styled.div`
  font-size: 1.2rem;
  color: #5f5f5f;
  line-height: 1.5;

  transition: all 650ms ease-in-out;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;
const NewPara = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  @media only screen and (max-width: 540px) {
    font-size: 13px;
  }
`;
const ImageConatinerAcc = styled.div`
  flex: 1;
  @media only screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ImageAcc = styled.img`
  width: 100%;
  max-width: 50%;
  height: auto;
`;

const Pricing = () => {
  const pricingData = [
    {
      id: 1,
      title: "Basic",
      rupees: "Just for ₹6000/-",
      content: [
        "✅ Website with basic design.",
        "✅ Call, Email and features.",
        "✅ Show cases all your products.",
        "✅ Offline payment.",
        "✅ No animations.",
        "✅ No databases.",
      ],
      // content:
      //   "Website with basic design call and email features, Show cases all your products. Online booking but offline payment no animations and databases.",
      value: false,
    },
    {
      id: 2,
      title: "Moderate",
      rupees: "Just for ₹12000/-",
      content: [
        "✅ Website with creative design.",
        "✅ Call, Email and features.",
        "✅ Show cases all your products.",
        "✅ Online booking but Offline payment.",
        "✅ Animations added.",
        "✅ No databases.",
      ],
      // content:
      //   "Website with creative design call, email and  features, Show cases all your products. Online booking but offline payment, animations added but no  databases.",
      value: false,
    },
    {
      id: 3,
      title: "Advanced",
      rupees: "Just for ₹17000/-",
      content: [
        "✅ Website with Advanced design.",
        "✅ Call, Email and features.",
        "✅ WhatsApp and SMS features.",
        "✅ Show cases all your products.",
        "✅ Online booking.",
        "✅ Online payment.",
        "✅ Animations Added.",
        "✅ Databases added.",
      ],
      // content:
      //   "Website with advanced creative design call, email, whatsApp and SMS features, Show cases all your products. Online booking with online payment, animations and databases available."
      value: true,
    },
  ];

  const [isActive, setIsActive] = useState(null);
  const valueText = [SimpleValue, MediumValue, BestValue];

  function clickFunction(index) {
    if (isActive === index) {
      return setIsActive(null);
    }
    setIsActive(index);
  }
  return (
    <Container>
      <Headingcont>
        <SpanIcon>
          <MdOutlineCurrencyRupee />
        </SpanIcon>
        <Heading1>Pricing Available ~</Heading1>
      </Headingcont>
      <Leaf />
      <ImageContainer>
        <ImageSection>
          <Image src={Project} alt="Image not found" />
        </ImageSection>
        <AboutBusiness>
          <Paragraph>
            Hi. I'm Sandeep Prajapati who loves to build and design Websites.
            Get your own website for a very minimal price range. Showcase your
            business online. Contact me for more details.
          </Paragraph>
          <Cheers>Cheers!</Cheers>
        </AboutBusiness>
      </ImageContainer>
      {/*  */}
      <Wrapper>
        <Accordian>
          {pricingData.map((ele, index) => {
            const Val = valueText[index];
            return (
              <>
                <Item>
                  <Title onClick={() => clickFunction(index)}>
                    <Para>{ele.title}</Para>
                    <Spann>{isActive === index ? "-" : "+"}</Spann>
                  </Title>
                  {isActive === index ? (
                    <ContectAndPrice>
                      <Rupees>{ele.rupees}</Rupees>
                      {/* {ele.value ? <BestValue /> : ""} */}
                      <Val />
                      <Content>
                        {ele.content.map((el) => (
                          <NewPara key={el}>{el}</NewPara>
                        ))}
                      </Content>
                    </ContectAndPrice>
                  ) : (
                    <Para />
                  )}
                </Item>
              </>
            );
          })}
        </Accordian>
        <ImageConatinerAcc>
          <ImageAcc src={AccImage} alt="image not found" />
        </ImageConatinerAcc>
      </Wrapper>
    </Container>
  );
};

export default Pricing;
