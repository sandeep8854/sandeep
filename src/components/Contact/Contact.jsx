import styled, { keyframes } from "styled-components";
import { CiMail } from "react-icons/ci";
import { PiPhone } from "react-icons/pi";
import { LuContact } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { MdStarRate } from "react-icons/md";
import ConstactImg from "../../../public/contact.png";
import randomImage from "../../../public/contactIMAGE.jpg";
import Button from "../Button/Button";
import ButtonSubmit from "../Button/ButtonSubmit";
import Leaf from "../Leaf/Leaf.jsx";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  padding: 7rem 2rem 0rem 2rem;

  @media only screen and (max-width: 650px) {
    margin-left: 1rem;
    margin-bottom: 2rem;
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
const NewDivCont = styled.div`
  margin-bottom: 1.5rem;
  max-width: 50%;
  @media only screen and (max-width: 500px) {
    max-width: 100%;
  }
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
    font-weight: 500;
  }
`;
const Form = styled.form`
  input[type="submit"] {
    margin-top: 4rem;
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
  }
`;
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
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: #8d8d8d;
  font-weight: 500;
`;
const Sup = styled.sup`
  color: red;
  margin-left: -5px;
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
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
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
  font-size: 1.5rem;
  margin-bottom: 5px;
  font-weight: 500;
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
  font-size: 1.5rem;
  margin-bottom: 5px;
  font-weight: 500;
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
const ImageCntainer = styled.div`
  max-height: 70vh;
  /* border: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 2px solid rgb(242, 148, 184);
  border-radius: 4px; */
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${forPopUp} 5s linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
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
  padding-bottom: 5.5rem;
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gjaaa6j",
        "template_l95jxbq",
        form.current,
        "PJGEqfq4ipH0iSny2"
      )
      .then(
        (result) => {
          toast(`Your message has been sent successfully`);
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
        },
        (error) => {
          toast("Failed Meassage not sent 😔 Try after some times");
          console.log(error.text);
        }
      );
  };
  return (
    <Section>
      <Headingcont>
        <SpanContact>
          <LuContact />
        </SpanContact>
        <Heading1>Contact Us ~</Heading1>
      </Headingcont>
      <Leaf />
      <NewDivCont>
        <HeadingT>I am open to work and network</HeadingT>
        <Paragraph2>
          If you have an exciting project in mind, want to collaborate, or
          simply wish me connect, let's initiate a conversation.
        </Paragraph2>
      </NewDivCont>
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
          <Form ref={form} onSubmit={sendEmail}>
            <NameContainer>
              <LableE>
                Name{" "}
                <Sup>
                  <MdStarRate />
                </Sup>
              </LableE>
              <InputFN type="text" name="user_name" />
            </NameContainer>
            <EmailContainer>
              <InputL>
                Email{" "}
                <Sup>
                  <MdStarRate />
                </Sup>
              </InputL>
              <InputEmail type="email" name="user_email" />
            </EmailContainer>
            <MessageContainer>
              <LableM>
                Message{" "}
                <Sup>
                  <MdStarRate />
                </Sup>
              </LableM>
              <TextArea
                cols="9"
                rows="8"
                placeholder="Leave us message."
                name="message"
              ></TextArea>
            </MessageContainer>
            <input type="submit" value="Send" />
          </Form>
          <ToastContainer />
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
