import styled from "styled-components";
import SocialPlate from "../Hero/SocialPlate";
const Footer = styled.footer`
  background-color: #444;
  padding-top: 3.5rem;
  padding-bottom: 2rem;
  font-size: 1.2rem !important;
  color: #999;
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
const ParaGraphFooter = styled.p``;
const FollowContainer = styled.div``;
const FollowText = styled.p``;
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
const Para1 = styled.p``;
const Para2 = styled.p``;

const FooterSec = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  // console.log(year);

  return (
    <Footer>
      <TextContainer>
        <CoverCopySocial>
          <ParaGraphFooter>
            Copyright &#169; {year} Sandeep, All rights reserved.
          </ParaGraphFooter>
          <FollowContainer>
            <FollowText>Follow us on Social Plateform</FollowText>
            <Icon>
              <SocialPlate />
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
