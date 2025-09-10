import { FiDownload } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav>
      <div className="bg-white py-[20px] shadow-md fixed w-full top-0">
        <div className="lg:px-[80px] px-5 flex justify-between items-center">
          <div className="flex justify-center items-center gap-3">
            <img src="/images/logo.svg" alt="" />
            <p className="text-2xl font-bold">Gozirim</p>
          </div>
          <ul className="flex justify-center items-center space-x-20 text-[20px] font-semibold">
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Contact Me</a>
            </li>
          </ul>
          <button className="flex items-center justify-center h-[56px] gap-4 bg-black text-white w-[153px] rounded-[4px] font-semibold">
            Resume <FiDownload size={20} className="shrink-0" />
          </button>
        </div>
      </div>
    </nav>
  );
}
