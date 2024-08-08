import Image from "next/image";
import { TbCategory } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";


const VerticalSideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen">
      <div className="hidden h-full w-28 bg-violet-900 md:block">
        <div className="flex w-full flex-col items-center gap-4 py-6">
          <div>
            <Image
              src="https://www.somaportal.com/gray-logo.svg"
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          <div className="w-full flex-1 mt-4 px-2">
            <div className="w-full py-3 text-xs text-white font-medium rounded flex flex-col items-center hover:bg-violet-800 gap-2">
              <div>
                <AiOutlineHome color="white" size={30} />
              </div>
              <div>Home</div>
            </div>
            <div className="w-full py-3 text-xs text-white font-medium flex flex-col items-center rounded hover:bg-violet-800 gap-2">
              <div>
                <TbCategory color="white" size={30} />
              </div>
              <div>Company</div>
            </div>
            <div className="w-full py-3 text-xs text-white font-medium flex flex-col items-center rounded hover:bg-violet-800 gap-2">
              <div>
                <RiMoneyDollarCircleLine color="white" size={30} />
              </div>
              <div>Resources</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalSideBar;
