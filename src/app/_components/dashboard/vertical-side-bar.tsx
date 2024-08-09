import Image from "next/image";
import { TbCategory } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Link from "next/link";

const VerticalSideBar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen">
      <div className="hidden h-full w-28 bg-violet-900 md:block">
        <div className="flex w-full flex-col items-center gap-4 py-6">
          <Link href="/">
            <div>
              <Image
                src="https://www.somaportal.com/gray-logo.svg"
                alt="logo"
                width={50}
                height={50}
              />
            </div>
          </Link>
          <div className="mt-4 w-full flex-1 px-2">
            <Link href="/">
              <div className="flex w-full flex-col items-center gap-2 rounded py-3 text-xs font-medium text-white hover:bg-violet-800">
                <div>
                  <AiOutlineHome color="white" size={30} />
                </div>
                <div>Home</div>
              </div>
            </Link>
            <Link href="/companies">
              <div className="flex w-full flex-col items-center gap-2 rounded py-3 text-xs font-medium text-white hover:bg-violet-800">
                <div>
                  <TbCategory color="white" size={30} />
                </div>
                <div>Company</div>
              </div>
            </Link>
            <div className="flex w-full flex-col items-center gap-2 rounded py-3 text-xs font-medium text-white hover:bg-violet-800">
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
