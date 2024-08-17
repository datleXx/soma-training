import { Skeleton } from "@mui/material";
import { TableCell, TableRow } from "@tremor/react";
const CompanyTableSkeleton = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <TableRow key={index} className="cursor-pointer hover:bg-gray-100">
          <TableCell>
            <div className="flex items-center space-x-4">
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={40}
                height={40}
              />
              <div>
                <div className="font-semibold text-black">
                  <Skeleton
                    animation="wave"
                    variant="text"
                    width={100}
                    height={20}
                  />
                </div>
                <div className="whitespace-normal text-xs text-gray-500">
                  <Skeleton
                    animation="wave"
                    variant="text"
                    width={500}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" width={100} height={20} />
          </TableCell>
          <TableCell className="whitespace-normal">
            <Skeleton animation="wave" variant="text" width={150} height={20} />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" width={100} height={20} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default CompanyTableSkeleton;
