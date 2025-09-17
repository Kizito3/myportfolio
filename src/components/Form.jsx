import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import IconContainer from "./icon-container";
import { BsTwitterX } from "react-icons/bs";

const socials = [
  { icon: <FaFacebook size={25} />, href: "#" },
  { icon: <BsTwitterX size={20} />, href: "https://x.com/only__1kizzy" },
  { icon: <FaGithub size={25} />, href: "https://github.com/Kizito3" },

  {
    icon: <FaLinkedin size={25} />,
    href: "https://www.linkedin.com/in/okwara-kizito-chigozirim-31b0a5217/",
  },
];
export default function Form() {
  return (
    <div className="">
      <form action="https://formspree.io/f/xnnbkodj" method="POST">
        <div className="">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            required
            className="h-[56px] lg:w-[500px] mb-5 w-full outline-black outline-3 rounded-md px-4"
          />
          <input
            type="text"
            placeholder="Your email"
            name="email"
            className="h-[56px] lg:w-[500px] mb-5 w-full outline-black outline-3 rounded-md px-4"
          />
          <input
            type="text"
            placeholder="Your website(if exists)"
            name="website"
            required
            className="h-[56px] lg:w-[500px] mb-5 w-full outline-black outline-3 rounded-md px-4"
          />
          <textarea
            name="message"
            className="lg:w-[500px] w-full h-[140px] outline-black outline-3 rounded-md px-4 py-4"
            id=""
            placeholder="How can i help?*"
            required
          />
          <div className="mt-5 flex gap-5 lg:flex-row flex-col">
            <button
              type="submit"
              className="flex items-center justify-center gap-4 rounded-md border-2 border-dashed border-black bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none capitalize cursor-pointer"
            >
              Get in touch
            </button>

            <div className="flex gap-4">
              {" "}
              {socials.map((item, i) => (
                <div key={i}>
                  <IconContainer href={item.href} target="__blank">
                    {item.icon}
                  </IconContainer>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
