import { Skeleton } from "@nextui-org/react";
import { TableBody, TableCell, TableRow } from "@tremor/react";
const DashboardCompanyListSkeleton = () => {
  return (
    <TableBody>
      {Array.from({ length: 10 }).map((_, index) => (
        <TableRow key={index} className="hover:bg-gray-50">
          <TableCell className="flex items-center gap-3">
            <Skeleton className="h-10 w-10" />
            <div className="whitespace-normal">
              <h3 className="text-sm font-medium">
                <Skeleton className="h-4 w-20" />
              </h3>
              <p className="text-sm text-gray-400">
                <Skeleton className="h-4 w-20" />
              </p>
            </div>
          </TableCell>
          <TableCell className="hidden text-sm text-gray-500 lg:table-cell">
            <Skeleton className="h-4 w-20" />
          </TableCell>
          <TableCell className="hidden lg:table-cell">
            <div className="rounded-full bg-green-100 p-2 text-center text-xs font-semibold text-green-800">
              <Skeleton className="h-4 w-20" />
            </div>
          </TableCell>
          <TableCell>
            <div className="rounded-full bg-green-100 p-2 text-center text-xs font-semibold text-green-800">
              <Skeleton className="h-4 w-20" />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default DashboardCompanyListSkeleton;
