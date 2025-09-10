export default function Footer() {
  return (
    <div className="bg-black h-[100px] text-white">
      <div className=" lg:px-[80px] px-5">
        <div className="flex justify-between items-center py-[28px]">
          <div className="flex items-center gap-3">
            <img src="/images/logofooter.svg" alt="" />
            <p className="text-2xl font-bold">Gozirim</p>
          </div>
          <div>
            <p>@ {new Date().getFullYear()} Gozirim</p>
          </div>
        </div>
      </div>
    </div>
  );
}
