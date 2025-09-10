export default function SkillContainer({ children, className }) {
  return (
    <div
      className={`${className} border-3 border-black hover:text-white rounded-[4px] lg:h-[186px] lg:w-[186px] h-[161px] w-[161px] flex justify-center items-center hover:bg-black duration-200 transition-all cursor-pointer`}
    >
      <div>{children}</div>
    </div>
  );
}
