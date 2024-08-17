import { Card } from "@tremor/react";
import { Skeleton } from "@mui/material";

const FounderIntroSkeleton = () => {
  return (
    <Card>
      <h1 className="text-lg font-medium">Founders</h1>
      <div className="cursor-pointer p-4">
        <div className="flex items-center gap-3">
          <div>
            <Skeleton variant="text" width={70} height={70} />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-medium text-sky-700 hover:text-sky-500">
              <Skeleton variant="text" width={100} height={20} />
            </h1>
            <div className="flex items-center gap-2">
              <Skeleton variant="text" width={20} height={20} />
              <Skeleton variant="text" width={25} height={25} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FounderIntroSkeleton;
