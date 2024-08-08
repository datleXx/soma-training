import Image from "next/image";
import { Button } from "@tremor/react";

const UserInfoCard = () => {
  return (
    <div className="mt-5 max-w-xl rounded-lg border border-gray-200 shadow-md mx-7">
      <div className="flex flex-col gap-5 p-5">
        <div className="flex items-center gap-5 border-b border-gray-200 pb-5">
          <div className="flex items-center gap-3">
            <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              alt="user"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-500">Welcome back,</p>
              <p className="text-xl font-bold text-black">Dev Testing</p>
              <p className="text-sm text-gray-500">
                To the Soma Capital Platform
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <Button className="rounded border-gray-200 bg-white text-black hover:border-gray-300 hover:bg-gray-100">
              Discover a top company
            </Button>
            <Button className="rounded border-gray-200 bg-white text-black hover:border-gray-300 hover:bg-gray-100">
              Discover a top company
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-3">
            <p className="text-lg font-bold">890+</p>
            <p className="text-sm text-gray-500">Portfolio companies</p>
          </div>
          <div className="p-3">
            <p className="text-lg font-bold">3000+</p>
            <p className="text-sm text-gray-500">News articles</p>
          </div>
          <div className="p-3">
            <p className="text-lg font-bold">9700+</p>
            <p className="text-sm text-gray-500">Founder updates</p>
          </div>
          <div className="p-3">
            <p className="text-lg font-bold">3100+</p>
            <p className="text-sm text-gray-500">Meetings taken</p>
          </div>
          <div className="p-3">
            <p className="text-lg font-bold">51700+</p>
            <p className="text-sm text-gray-500">Email interactions</p>
          </div>
          <div className="p-3">
            <p className="text-lg font-bold">10300+</p>
            <p className="text-sm text-gray-500">Total deals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
