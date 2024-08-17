import { Card, Divider } from "@tremor/react";
import { Skeleton } from "@mui/material";

const AboutTabSkeleton = () => {
  return (
    <Card>
      <p className="text-lg font-medium">Company Information</p>
      <Divider />
      <div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="mt-1 text-sm text-gray-900">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="mt-1 cursor-pointer text-sm font-medium text-violet-900 hover:text-violet-700">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="mt-1 text-sm text-gray-900">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="mt-1 text-sm text-gray-900">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="mt-1 text-sm text-gray-900">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="mt-1 text-sm text-gray-900">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="mt-1 text-sm text-gray-900">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="mt-1 text-sm text-gray-900">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="mt-1 text-sm text-gray-900">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="mt-1 text-sm text-gray-900">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="sm:col-span-1">
            <p className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="mt-1 text-sm text-gray-900">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-sm font-medium text-gray-500">
              <Skeleton variant="text" width={100} height={20} />
            </p>
            <p className="mt-1 text-sm text-gray-900">
              <Skeleton variant="text" width={100} height={20} />
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AboutTabSkeleton;
