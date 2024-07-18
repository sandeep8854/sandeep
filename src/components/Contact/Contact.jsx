import styled, { keyframes } from "styled-components";
import { CiMail } from "react-icons/ci";
import { PiPhone } from "react-icons/pi";
import { LuContact } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import ConstactImg from "../../../public/contact.png";
import randomImage from "../../../public/contactIMAGE.jpg";
import Button from "../Button/Button";
import ButtonSubmit from "../Button/ButtonSubmit";
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

const Section = styled.section`
  /* max-width: 100vw;
  height: 100vh; */
  background-color: #fff;
  /* padding: 0;
  margin: 0; */
  margin-left: 2rem;
  margin-right: 2rem !important;
  margin-bottom: 2rem;
  padding: 7rem 2rem 7rem 2rem;

  @media only screen and (max-width: 650px) {
    margin-left: 1rem;
  }
`;
const Headingcont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;
const SpanContact = styled.span`
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
const Heading1 = styled.h1`
  text-align: center !important;
`;
const LeftRightwrapper = styled.div`
  display: flex;
  gap: 4rem;
  flex-direction: row-reverse;
  @media only screen and (max-width: 881px) {
    flex-direction: column-reverse;
  }
`;
const Left = styled.div`
  flex: 1;
  width: 100%;
`;

const horizentalShake = keyframes` 
 0% { transform: translateX(0) }
 25% { transform: translateX(5px) }
 50% { transform: translateX(-5px) }
 75% { transform: translateX(5px) }
 100% { transform: translateX(0) }
`;
const AnimateDiv = styled.div`
  /* animation-name: ${horizentalShake}; */
  animation-duration: 0.35s;
  animation-iteration-count: infinite;
`;
const ParaGraph = styled.p`
  display: inline;
  font-size: 1.2rem;
  color: #8d8d8d;
  font-weight: 600;
  padding: 3px 11px;
  border-radius: 0px;
  border: 2px solid #44a6d3;
  text-transform: uppercase;
  @media only screen and (max-width: 650px) {
    font-size: 1.4rem;
  }
`;
const HeadingT = styled.h2`
  font-size: 2rem;
  color: #8d8d8d;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
const Paragraph2 = styled.p`
  font-size: 1.4rem;
  color: #8d8d8d;
  font-weight: 400;
  width: 100%;
  padding-bottom: 1rem;
  word-spacing: 5px;
  @media only screen and (max-width: 650px) {
    font-size: 1.6rem;
  }
`;
const Form = styled.form``;
const FirstLastConst = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  margin-bottom: 1rem;
  color: #8d8d8d;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    gap: 5px;
  }
`;
const NameContainer = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: #8d8d8d;
`;
const LableE = styled.label`
  font-size: 1.4rem;
  margin-bottom: 5px;
  color: #8d8d8d;
`;
const InputFN = styled.input`
  color: #8d8d8d;
  background-color: #fff;
  /* border: 1px solid rgb(77, 77, 77); */
  outline: none;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 2px solid rgb(242, 148, 184);
  /* box-shadow: 6px 7px 15px -10px rgba(0, 0, 0, 0.75); */
  &:focus {
    outline: 2px solid pink;
    outline-offset: 3px;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;
const LastName = styled.div`
  margin: 1.5rem 0;
`;
const LableL = styled.label`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;
const InputLN = styled.input`
  color: #8d8d8d;
  background-color: #fff;
  /* border: 1px solid rgb(77, 77, 77); */
  outline: none;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  /* border: none;
  box-shadow: 6px 7px 15px -10px rgba(0, 0, 0, 0.75); */
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 2px solid rgb(242, 148, 184);
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;
const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: #8d8d8d;
`;
const InputL = styled.label`
  font-size: 1.4rem;
  margin-bottom: 5px;
`;
const InputEmail = styled.input`
  color: #8d8d8d;
  background-color: #fff;
  /* border: 1px solid rgb(77, 77, 77); */
  outline: none;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  /* border: none;
  box-shadow: 6px 7px 15px -10px rgba(0, 0, 0, 0.75); */
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 2px solid rgb(242, 148, 184);
  &:focus {
    outline: 2px solid pink;
    outline-offset: 3px;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  color: #8d8d8d;
`;
const LableM = styled.label`
  font-size: 1.4rem;
  margin-bottom: 5px;
`;
const TextArea = styled.textarea`
  background-color: #fff;
  /* border: 1px solid rgb(77, 77, 77); */
  outline: none;
  border-radius: 4px;
  padding-left: 1rem;
  color: #8d8d8d;
  /* border: none;
  box-shadow: 6px 7px 15px -10px rgba(0, 0, 0, 0.75); */
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 2px solid rgb(242, 148, 184);
  &:focus {
    outline: 2px solid pink;
    outline-offset: 3px;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
`;
const ButtonContai = styled.div``;
const Right = styled.div`
  flex: 1;
  width: 100%;
  border-radius: 4px;
  border-left: 2px solid rgb(242, 148, 184) !important;
`;
const ImageCntainer = styled.div`
  max-height: 70vh;
  /* border: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 2px solid rgb(242, 148, 184);
  border-radius: 4px; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  max-width: 40rem;
  height: auto;
  animation: ${float} 3s ease-in-out infinite;
`;
const MailPPhoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 4.6rem;
  border-radius: 4px;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  border-right: 1px solid rgba(0, 0, 0, 0.125) !important;
  /* border-left: 2px solid rgb(242, 148, 184); */
  padding-bottom: 3.6rem;
`;
const EmailContai = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;
  /* border: 1px solid rgb(77, 77, 77); */
  padding: 1rem 0 1rem 0;
`;
const CiMailContai = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 2.5rem;
  padding-left: 1rem;
`;
const CiMailForDesign = styled.div`
  display: flex;
  align-items: center;
  background-color: #44a6d3;
  padding: 8px 8px;
  border-radius: 50%;
  color: #fff;
`;
const EmailActual = styled.div`
  display: flex;
  flex-direction: column;
`;
const SpanE = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: #8d8d8d;
  @media only screen and (max-width: 650px) {
    font-size: 1.6rem;
    font-weight: 500;
    color: rgb(77, 77, 77);
  }
`;
const SapnS = styled.span`
  font-size: 1.2rem;
  color: rgb(77, 77, 77);
  @media only screen and (max-width: 650px) {
    font-size: 1.6rem;
  }
`;
const PhoneContai = styled.div`
  display: flex;
  gap: 5rem;
  /* border: 1px solid rgb(77, 77, 77); */
  padding: 1rem 0 1rem 0;
`;
const PiPhoneContai = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 2.5rem;
  padding-left: 1rem;
`;
const PiPhoneDesing = styled.div`
  display: flex;
  align-items: center;
  background-color: #44a6d3;
  padding: 8px 8px;
  border-radius: 50%;
  color: #fff;
`;
const PhoneActual = styled.div`
  display: flex;
  flex-direction: column;
`;
const SpanP = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: #8d8d8d;
  @media only screen and (max-width: 650px) {
    font-size: 1.6rem;
    font-weight: 500;
    color: rgb(77, 77, 77);
  }
`;
const SpanN = styled.span`
  font-size: 1.2rem;
  color: rgb(77, 77, 77);
  @media only screen and (max-width: 650px) {
    font-size: 1.6rem;
  }
`;

const Contact = () => {
  return (
    <Section>
      <Headingcont>
        <SpanContact>
          <LuContact />
        </SpanContact>
        <Heading1>Contact Us ~</Heading1>
      </Headingcont>
      <Leaf />
      <LeftRightwrapper>
        <Left>
          <AnimateDiv>
            <ParaGraph>Get in Touch</ParaGraph>
          </AnimateDiv>
          <HeadingT>Let's Chat, Reach Out to Us</HeadingT>
          <Paragraph2>
            Have questions or feedback? We are here to help. Send us a message
            and We'll responed within 24 hours.
          </Paragraph2>
          <Form>
            <NameContainer>
              <LableE>Full Name</LableE>
              <InputFN type="text" />
            </NameContainer>
            <EmailContainer>
              <InputL>Email Address</InputL>
              <InputEmail type="text" />
            </EmailContainer>
            <MessageContainer>
              <LableM>Message</LableM>
              <TextArea
                cols="9"
                rows="8"
                placeholder="Leave us message."
              ></TextArea>
            </MessageContainer>
            <ButtonSubmit />
          </Form>
        </Left>
        <Right>
          <ImageCntainer>
            <Image src={randomImage} alt="Image not found conntact" />
          </ImageCntainer>
          <MailPPhoneContainer>
            {/* Email */}
            <EmailContai>
              <CiMailContai>
                <CiMailForDesign>
                  <CiMail />
                </CiMailForDesign>
              </CiMailContai>
              <EmailActual>
                <SpanE>Email</SpanE>
                <SapnS>sandeepstructure@gmail.com</SapnS>
              </EmailActual>
            </EmailContai>
            {/* Phone */}
            <PhoneContai>
              <PiPhoneContai>
                <PiPhoneDesing>
                  <PiPhone />
                </PiPhoneDesing>
              </PiPhoneContai>
              <PhoneActual>
                <SpanP>Phone</SpanP>
                <SpanN>+91 8112912494</SpanN>
              </PhoneActual>
            </PhoneContai>
            {/* Address */}
            <PhoneContai>
              <PiPhoneContai>
                <PiPhoneDesing>
                  <SlLocationPin />
                </PiPhoneDesing>
              </PiPhoneContai>
              <PhoneActual>
                <SpanP>Address</SpanP>
                <SpanN>Bangalore Karnataka, India</SpanN>
              </PhoneActual>
            </PhoneContai>
          </MailPPhoneContainer>
        </Right>
      </LeftRightwrapper>
    </Section>
  );
};

export default Contact;
