import SandeepImage from "../../../public/sandeep1.png";
import "./hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
// import { FaHackerrank } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
// import { BsTwitterX } from "react-icons/bs";
// import { SiFreecodecamp } from "react-icons/si";
// import { PiLinkSimpleHorizontalBreak } from "react-icons/pi";
import Button from "../Button/Button";
import SocialPlate from "./SocialPlate";
// import svgImg from "../../../public/hero-pattern-mweb.svg";
const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Fontend Engineer.",
      "Software Developer.",
      "Programmer.",
      "Problem Solver.",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  /*
  const social = [
    PiLinkSimpleHorizontalBreak,
    FaGithub,
    FaGitlab,
    FaLinkedin,
    FaHackerrank,
    SiLeetcode,
    BsTwitterX,
    SiFreecodecamp,
  ];
 const socialMediaIcons = [
    {
      id: "Link",
      icon: "PiLinkSimpleHorizontalBreak",
      link: "https://sandeep-portfolio-iu6a.vercel.app/",
      target: "_blank",
      rel: "",
    },
    {
      id: "Github",
      icon: "FaGithub",
      link: "https://github.com/sandeep8854",
      target: "_blank",
      rel: "",
    },
    {
      id: "GitLab",
      icon: "FaGitlab",
      link: "https://gitlab.com/sandeepprajapati8854",
      target: "_blank",
      rel: "",
    },
    {
      id: "LinkedIn",
      icon: "FaLinkedin",
      link: "https://www.linkedin.com/in/sandeep-prajapati-099731269/",
      target: "_blank",
      rel: "",
    },
    {
      id: "HackerRank",
      icon: "FaLinkedin",
      link: "https://www.hackerrank.com/profile/sandeepstructure",
      target: "_blank",
      rel: "",
    },
    {
      id: "Leetcode",
      icon: "FaLinkedin",
      link: "https://leetcode.com/sandeepstructure/",
      target: "_blank",
      rel: "",
    },
    {
      id: "Twitter",
      icon: "FaLinkedin",
      link: "https://twitter.com/sandeepdevps",
      target: "_blank",
      rel: "",
    },
    {
      id: "freeCodeCamp",
      icon: "SiFreecodecamp",
      link: "https://www.freecodecamp.org/sandeep_8854",
      target: "_blank",
      rel: "",
    },
  ];
  */
  return (
    <>
      <section className="profile-section">
        <div className="profile-section-content">
          <div className="profile-image-wrapper">
            <div className="profile-box-right"></div>
            <div className="profile-box-left"></div>
            <div className="profile-box-bottom"></div>
            <img
              src={SandeepImage}
              alt="image by sandeep not found"
              className="profile-image"
            />
          </div>
          <div className="profile-content-right">
            <div className="profile-color-ball profile-color-ball2"></div>
            <div className="profile-title">
              <div className="profile-color-ball profile-color-ball1"></div>
              Hey! I am <br />
              <span className="profile-title-name">Sandeep</span>
            </div>
            <div className="profile-designation">
              I'm a <span className="role">{text}</span>{" "}
              <span className="role">
                <Cursor />
              </span>
              <br />
              working at Mountblue | The Mountblue Technologies
              <div className="profile-color-ball profile-color-ball3"></div>
            </div>
            <div className="social-container">
              {/* 44a6d3{socialMediaIcons.map((iconEle, index) => {
                const Icon = social[index];
                return (
                  <>
                    <div className="social-media-profile">
                      <a
                        href={iconEle.link}
                        target={iconEle.target}
                        rel={iconEle.rel}
                        className="styleIcon"
                      >
                        <Icon />
                      </a>
                    </div>
                  </>
                );
              })} */}
              <SocialPlate backgroundColor="#44a6d3" />
            </div>
            <Button />
            <div className="profile-color-ball profile-color-ball4"></div>
            <div className="profile-color-ball profile-color-ball5"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
