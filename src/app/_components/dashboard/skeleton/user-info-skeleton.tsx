import { Skeleton } from "@mui/material";
import { Card, Button } from "@tremor/react";

const UserInfoSkeleton = () => {
  return (
    <Card className="mt-5 rounded-md">
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-5 border-b border-gray-200 p-4 pb-5">
          <div className="flex items-center gap-5">
            <Skeleton variant="rectangular" width={70} height={70} />

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-500">Welcome back,</p>
              <p className="text-xl font-bold text-black">
                <Skeleton variant="text" width={100} height={20} />
              </p>
              <p className="text-sm text-gray-500">
                To the Soma Capital Platform
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button className="rounded border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-100">
              <Skeleton variant="text" width={100} height={20} />
            </Button>
            <Button className="rounded border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-100">
              <Skeleton variant="text" width={100} height={20} />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 text-center">
          <div className="p-3">
            <p className="text-md font-bold">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="text-sm text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="p-3">
            <p className="text-md font-bold">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="text-sm text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="p-3">
            <p className="text-md font-bold">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="text-sm text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="p-3">
            <p className="text-md font-bold">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="text-sm text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="p-3">
            <p className="text-md font-bold">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="text-sm text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="p-3">
            <p className="text-md font-bold">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="text-sm text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserInfoSkeleton;
