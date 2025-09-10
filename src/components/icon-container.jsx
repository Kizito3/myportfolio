export default function IconContainer({ children, className, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className={`${className} border-3 border-black hover:text-white rounded-[4px] lg:h-[56px] lg:w-[56px] h-[48px] w-[48px] flex justify-center items-center hover:bg-black duration-200 transition-all`}
    >
      <div>{children}</div>
    </a>
  );
}
