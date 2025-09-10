import { FaCss3, FaGitAlt, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import SkillContainer from "./SkillContainer";
import { SiJavascript, SiPhp } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";

export default function SkillsSection() {
  return (
    <div className="lg:my-[120px] my-[50px] lg:px-[80px] px-5">
      <div>
        <h1 className="text-center lg:mb-[80px] mb-[40px] text-5xl">
          My <strong className="font-bold">Skills</strong>
        </h1>

        <div className="flex flex-wrap gap-10 items-center justify-center">
          <SkillContainer>
            <div className="flex flex-col items-center justify-center gap-5">
              <FaGitAlt size={60} />
              <p className="text-xl font-bold">Git</p>
            </div>
          </SkillContainer>
          <SkillContainer>
            <div className="flex flex-col items-center justify-center gap-5">
              <FaNodeJs size={60} />
              <p className="text-xl font-bold">NodeJs</p>
            </div>
          </SkillContainer>
          <SkillContainer>
            <div className="flex flex-col items-center justify-center gap-5">
              <SiJavascript size={60} />
              <p className="text-xl font-bold">Javascript</p>
            </div>
          </SkillContainer>
          <SkillContainer>
            <div className="flex flex-col items-center justify-center gap-5">
              <BiLogoTypescript size={60} />
              <p className="text-xl font-bold">Typescript</p>
            </div>
          </SkillContainer>
          <SkillContainer>
            <div className="flex flex-col items-center justify-center gap-5">
              <FaReact size={60} />
              <p className="text-xl font-bold">React</p>
            </div>
          </SkillContainer>
          <SkillContainer>
            <div className="flex flex-col items-center justify-center gap-5">
              <IoLogoHtml5 size={60} />
              <p className="text-xl font-bold">Html</p>
            </div>
          </SkillContainer>
          <SkillContainer>
            <div className="flex flex-col items-center justify-center gap-5">
              <RiNextjsFill size={60} />
              <p className="text-xl font-bold">NextJs</p>
            </div>
          </SkillContainer>
          <SkillContainer>
            <div className="flex flex-col items-center justify-center gap-5">
              <FaCss3 size={60} />
              <p className="text-xl font-bold">Css</p>
            </div>
          </SkillContainer>
          <SkillContainer>
            <div className="flex flex-col items-center justify-center gap-5">
              <FaSass size={60} />
              <p className="text-xl font-bold">Scss</p>
            </div>
          </SkillContainer>
          <SkillContainer>
            <div className="flex flex-col items-center justify-center gap-5">
              <SiPhp size={60} />
              <p className="text-xl font-bold">PHP</p>
            </div>
          </SkillContainer>
        </div>
      </div>
    </div>
  );
}
