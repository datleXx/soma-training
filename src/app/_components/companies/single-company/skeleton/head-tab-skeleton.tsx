import { Skeleton } from "@mui/material";
import { Button } from "@tremor/react";

const HeadTabSkeleton = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="py-6 md:flex md:items-center md:justify-between md:space-x-5">
        <div className="flex items-center space-x-5">
          <div className="flex-shrink-0">
            <Skeleton variant="rectangular" width={100} height={100} />
          </div>
          <div className="my-auto flex flex-col gap-y-2">
            <Skeleton variant="text" width={200} height={20} />
            <Skeleton variant="text" width={200} height={20} />
            <div className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
              <Skeleton variant="text" width={100} height={20} />
            </div>
          </div>
        </div>
        <div className="mt-6 flex space-x-3 md:mt-0">
          <Button className="cursor-pointer border-red-400 bg-white text-red-400 hover:border-red-400 hover:bg-red-50 hover:text-red-400">
            <Skeleton variant="text" width={100} height={20} />
          </Button>
          <Button className="cursor-pointer border-blue-400 bg-white text-blue-400 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-400">
            <Skeleton variant="text" width={100} height={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeadTabSkeleton;
