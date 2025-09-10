import { BsTwitterX } from "react-icons/bs";
import IconContainer from "./icon-container";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export default function HeroSection() {
  return (
    <div className="pt-[160px]">
      <div className="flex items-center justify-center lg:flex-row flex-col-reverse px-5">
        <div className="lg:w-[600px]">
          <h1 className="text-[28px] lg:text-[58px]">
            Hello i'm <strong> Gozirim.</strong>
          </h1>
          <h1 className="text-[28px] lg:text-[58px]">
            <strong>Frontend</strong> Developer
          </h1>
          <p className="lg:text-base text-sm text-[#71717A]">
            My name is okwara chigozirim kizito and i'm a fullstack web
            developer, with prior knowledge on HTML, CSS, JAVASCRIPT, REACT,
            NODEJS and PHP. i specialize mainly on crafting stunning and
            effective websites tailored to your unique needs.
          </p>
          <div className="lg:mt-20 mt-5">
            <div className="flex items-center gap-4">
              <IconContainer
                href={"https://sk-illustration-portfolio.netlify.app/"}
              >
                <FaFacebook size={25} />
              </IconContainer>
              <IconContainer
                href={"https://sk-illustration-portfolio.netlify.app/"}
              >
                <BsTwitterX size={20} />
              </IconContainer>
              <IconContainer
                href={"https://sk-illustration-portfolio.netlify.app/"}
              >
                <FaGithub size={25} />
              </IconContainer>
              <IconContainer
                href={"https://sk-illustration-portfolio.netlify.app/"}
              >
                <AiFillTikTok size={25} />
              </IconContainer>
              <IconContainer
                href={"https://sk-illustration-portfolio.netlify.app/"}
              >
                <FaLinkedin size={25} />
              </IconContainer>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/illustration.png"
            alt=""
            className=" object-cover"
          />
        </div>
      </div>
    </div>
  );
}
