import { Card, Button } from "@tremor/react";
import { Skeleton } from "@mui/material";

const RecentNewsSkeleton = () => {
  return (
    <Card className="mt-5 rounded-md p-2">
      <h1 className="p-3 text-lg font-medium">Recent news</h1>
      <div className="flex flex-col">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="mx-8 max-w-md cursor-pointer p-1 hover:bg-gray-100"
          >
            <div className="flex items-center justify-between py-4">
              <span className="rounded bg-white p-2">
                <Skeleton variant="rectangular" width={20} height={20} />
              </span>
              <h1 className="w-1/2 text-sm font-medium text-violet-900 hover:text-violet-500">
                <Skeleton variant="text" width={100} height={20} />
              </h1>
              <p className="text-sm text-gray-500">
                <Skeleton variant="text" width={50} height={20} />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-5">
        <div className="mx-auto w-5/6">
          <Button className="w-full rounded border border-gray-400 bg-white text-gray-500 hover:border-gray-500 hover:bg-gray-200">
            <Skeleton variant="text" width={100} height={20} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default RecentNewsSkeleton;
