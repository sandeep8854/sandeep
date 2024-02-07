import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { SiFreecodecamp } from "react-icons/si";
import { PiLinkSimpleHorizontalBreak } from "react-icons/pi";
import "./hero.css";
const SocialPlate = (props) => {
  const { backgroundColor } = props;
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
  return (
    <div className="social-container">
      {socialMediaIcons.map((iconEle, index) => {
        const Icon = social[index];
        return (
          <>
            <div className="social-media-profile" style={{ backgroundColor }}>
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
      })}
    </div>
  );
};

export default SocialPlate;
