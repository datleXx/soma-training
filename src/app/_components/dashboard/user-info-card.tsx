import Image from "next/image";
import { Button, Card } from "@tremor/react";
import { useSession } from "next-auth/react";
import UserInfoSkeleton from "./skeleton/user-info-skeleton";

const UserInfoCard = () => {
  const { data: sessionData, status } = useSession();

  if (status === "loading") {
    return <UserInfoSkeleton />;
  }
  return (
    <Card className="mt-5 rounded-md">
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-5 border-b border-gray-200 p-4 pb-5">
          <div className="flex items-center gap-5">
            <Image
              src={
                sessionData?.user?.image ??
                "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              }
              alt="user"
              width={70}
              height={70}
              className="rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-500">Welcome back,</p>
              <p className="text-xl font-bold text-black">
                {sessionData?.user?.name}
              </p>
              <p className="text-sm text-gray-500">
                To the Soma Capital Platform
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button className="rounded border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-100">
              Discover a top company
            </Button>
            <Button className="rounded border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-100">
              Discover a top company
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 text-center">
          <div className="p-3">
            <p className="text-md font-bold">890+</p>
            <p className="text-sm text-gray-500">Portfolio companies</p>
          </div>
          <div className="p-3">
            <p className="text-md font-bold">3000+</p>
            <p className="text-sm text-gray-500">News articles</p>
          </div>
          <div className="p-3">
            <p className="text-md font-bold">9700+</p>
            <p className="text-sm text-gray-500">Founder updates</p>
          </div>
          <div className="p-3">
            <p className="text-md font-bold">3100+</p>
            <p className="text-sm text-gray-500">Meetings taken</p>
          </div>
          <div className="p-3">
            <p className="text-md font-bold">51700+</p>
            <p className="text-sm text-gray-500">Email interactions</p>
          </div>
          <div className="p-3">
            <p className="text-md font-bold">10300+</p>
            <p className="text-sm text-gray-500">Total deals</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserInfoCard;
