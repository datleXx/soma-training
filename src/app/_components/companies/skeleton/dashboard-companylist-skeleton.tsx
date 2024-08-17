import { Skeleton } from "@mui/material";
import { TableBody, TableCell, TableRow } from "@tremor/react";
const DashboardCompanyListSkeleton = () => {
  return (
    <TableBody>
      {Array.from({ length: 10 }).map((_, index) => (
        <TableRow key={index} className="hover:bg-gray-50">
          <TableCell className="flex items-center gap-3">
            <Skeleton variant="rectangular" width={60} height={60} />
            <div className="whitespace-normal">
              <Skeleton variant="text" width={300} height={20} />
              <Skeleton variant="text" width={300} height={20} />
            </div>
          </TableCell>
          <TableCell className="hidden text-sm text-gray-500 lg:table-cell">
            <Skeleton variant="text" width={100} height={20} />
          </TableCell>
          <TableCell className="hidden lg:table-cell">
            <div className="rounded-full bg-green-100 p-2 text-center text-xs font-semibold text-green-800">
              <Skeleton variant="text" width={50} height={20} />
            </div>
          </TableCell>
          <TableCell>
            <div className="rounded-full bg-green-100 p-2 text-green-800">
              <Skeleton variant="text" width={50} height={20} />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default DashboardCompanyListSkeleton;
