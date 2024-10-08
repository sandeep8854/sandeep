import styled from "styled-components";
import SocialPlate from "../Hero/SocialPlate";
const Footer = styled.footer`
  background-color: #444;
  padding-top: 6.5rem;
  padding-bottom: 6rem;
  font-size: 1.2rem !important;
  color: #999;
`;

const AboutProfileQuickContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 3rem 2rem 8rem;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    padding: 0 4rem;
    padding-bottom: 2rem;
  }
`;
const AboutPeople = styled.div`
  flex: 2;
`;
const ParagraphText = styled.p`
  word-spacing: 2px;
  font-size: 1.3rem;
  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;
const UnorderList = styled.ul`
  list-style: none;
  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;
const List = styled.li`
  padding-bottom: 5px;
`;

const AnchorTag = styled.a``;
const Heading3 = styled.h3`
  padding-bottom: 1rem;
  font-size: medium;
`;
const ProfilePortfolio = styled.div`
  flex: 1;
`;
const QuickLink = styled.div`
  flex: 1;
`;
const SubscribeContainer = styled.div`
  @media only screen and (max-width: 500px) {
    padding-bottom: 4rem;
  }
`;
const SubscribeEmail = styled.div`
  display: flex;
  border: 2px solid #44a6d3;
  border-radius: 2px;
  background-color: #ffffff;
`;
const InputFN = styled.input`
  background-color: #fff;
  width: 70%;
  color: #8d8d8d;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  /* border: 1px solid rgb(77, 77, 77); */
  outline: none;
  padding: 0.5rem 1rem;
  border: none;
  font-weight: 500;
  @media only screen and (max-width: 500px) {
    padding: 1.2rem 1.5rem;
  }
  /* border-radius: 4px; */
  /* border: 1px solid rgba(0, 0, 0, 0.125); */
  /* border-left: 2px solid rgb(242, 148, 184); */
`;

const Button = styled.button`
  width: 30%;
  color: #ffffff;
  border: none;
  background-color: #44a6d3;
  /* border: 1px solid rgb(77, 77, 77); */
  outline: none;
  padding: 0.5rem 1rem;
  font-weight: 500;
  /* border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125); */
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    padding: 1.2rem 1.5rem;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  padding: 0 8rem;
  @media only screen and (max-width: 650px) {
    padding: 0 4rem;
  }
  @media only screen and (max-width: 421px) {
    padding: 0 0.5rem;
  }
`;
const CoverCopySocial = styled.div`
  padding: 1rem 0;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
`;
const ParaGraphFooter = styled.p`
  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
const FollowContainer = styled.div``;
const FollowText = styled.p`
  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`;
const TermContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding-top: 1rem;
`;
const Para1 = styled.p`
  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
const Para2 = styled.p`
  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

const FooterSec = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  // console.log(year);

  return (
    <Footer>
      <AboutProfileQuickContainer>
        <AboutPeople>
          <Heading3>About</Heading3>
          <ParagraphText>
            Thank you for visiting my portfolio website. I hope you enjoyed
            exploring my work and learning more about my expertise in graphic
            design, UI/UX, development, and DSA. If you have any questions or
            would like to discuss potential collaborations, please feel free to
            reach out to me. I'm always excited to connect with fellow
            professionals and explore new opportunities. I look forward to
            hearing from you.
          </ParagraphText>
        </AboutPeople>
        <ProfilePortfolio>
          <Heading3>Profiles & Portfolio</Heading3>
          <UnorderList>
            <List>
              <AnchorTag href="">GitHub</AnchorTag>
            </List>
            <List>
              <AnchorTag href="">GitLab</AnchorTag>
            </List>
            <List>
              <AnchorTag href="">HackerRank</AnchorTag>
            </List>
            <List>
              <AnchorTag href="">Leetcode</AnchorTag>
            </List>
            <List>
              <AnchorTag href="">Twitter</AnchorTag>
            </List>
          </UnorderList>
        </ProfilePortfolio>
        <QuickLink>
          <Heading3>Quick Link</Heading3>
          <UnorderList>
            <List>
              <AnchorTag href="">Home</AnchorTag>
            </List>
            <List>
              <AnchorTag href="">About</AnchorTag>
            </List>
            <List>
              <AnchorTag href="">Experience</AnchorTag>
            </List>
            <List>
              <AnchorTag href="">Project</AnchorTag>
            </List>
            <List>
              <AnchorTag href="">Contact</AnchorTag>
            </List>
          </UnorderList>
        </QuickLink>
      </AboutProfileQuickContainer>
      <AboutProfileQuickContainer>
        <AboutPeople>
          <Heading3>Address</Heading3>
          <ParagraphText>
            Indiqube Gamma, No.293/154/172 2nd floor, Outer Ring Road,
            Kadubeesanahalli, Bengaluru, Karnataka 560103
          </ParagraphText>
        </AboutPeople>
        <ProfilePortfolio>
          <Heading3>Keep in touch with us</Heading3>
          <UnorderList>
            <List>
              <AnchorTag href="">Call us on +91 8112912494</AnchorTag>
            </List>
            <List>
              <AnchorTag href="">Email: sandeepstructure@gmail.com</AnchorTag>
            </List>
          </UnorderList>
        </ProfilePortfolio>
        <QuickLink>
          <SubscribeContainer>
            <Heading3>Subscribe to emails</Heading3>
            <SubscribeEmail>
              <InputFN
                type="email"
                name="email"
                placeholder="Enter your email here*"
                autoComplete="off"
                required="true"
              />
              <Button>Join</Button>
            </SubscribeEmail>
          </SubscribeContainer>
        </QuickLink>
      </AboutProfileQuickContainer>
      <TextContainer>
        <CoverCopySocial>
          <ParaGraphFooter>
            Copyright &#169; 2023-{year} Sandeep Prajapati, All rights reserved.
          </ParaGraphFooter>
          <FollowContainer>
            <FollowText>Follow us on Social Plateform</FollowText>
            <Icon>
              <SocialPlate backgroundColor="#575757" />
            </Icon>
          </FollowContainer>
        </CoverCopySocial>
        <TermContainer>
          <Para1>Terms and conditions</Para1>
          <Para2>Privacy Policy</Para2>
        </TermContainer>
      </TextContainer>
    </Footer>
  );
};

export default FooterSec;
