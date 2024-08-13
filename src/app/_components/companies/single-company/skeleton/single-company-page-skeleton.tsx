import { Skeleton } from "@nextui-org/react";
import { Card } from "@tremor/react";

export const SingleCompanyPageSkeleton = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="py-6 md:flex md:items-center md:justify-between md:space-x-5">
        <div className="flex items-center space-x-5">
          <div className="flex-shrink-0">
            <Skeleton className="h-24 w-24" />
          </div>
          <div className="my-auto flex flex-col gap-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        <div className="mt-6 flex space-x-3 md:mt-0">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div className="col-span-1 lg:col-span-4 space-y-6">
          <Card>
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-full mt-4" />
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-full mt-2" />
          </Card>
        </div>
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <Card>
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-full mt-4" />
            <Skeleton className="h-4 w-full mt-2" />
            <Skeleton className="h-4 w-full mt-2" />
          </Card>
        </div>
      </div>
    </div>
  );
};