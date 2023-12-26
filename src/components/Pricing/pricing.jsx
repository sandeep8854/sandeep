import styled from "styled-components";
import Project from "../../../public/career_progress.png";
const Container = styled.div`
  margin-top: 3rem;
`;
const Headingcont = styled.div`
  margin: 3rem 0;
`;
const Heading1 = styled.h1``;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5rem 0 5rem;
  @media only screen and (max-width: 540px) {
    flex-direction: column;
  }
`;
const ImageSection = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  max-width: 40rem;
  height: auto;
`;

const AboutBusiness = styled.div`
  flex: 2;
`;

const Paragraph = styled.p`
  max-width: 50rem;
  padding: 0 2rem 0 2rem;
  font-size: 1.6rem;
  color: #4d4d4d;
  @media only screen and (max-width: 540px) {
    font-size: 15px;
  }
`;

const Cheers = styled.span`
  font-size: 2rem;
  padding-left: 1.7rem;
  font-weight: 600;
  color: #f294b8;
`;
const Pricing = () => {
  return (
    <Container>
      <Headingcont>
        <Heading1>Pricing Available ~</Heading1>
      </Headingcont>
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
    </Container>
  );
};

export default Pricing;
