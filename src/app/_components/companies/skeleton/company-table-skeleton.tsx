import { Skeleton } from "@nextui-org/react";
import { TableBody , TableCell , TableRow } from "@tremor/react";
const CompanyTableSkeleton = () => {
  return (
    <TableBody>
      {Array.from({ length: 8 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10" />
                <div>
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </TableCell>
            <TableCell>
                    <Skeleton className="h-4 w-20" />
            </TableCell>
            <TableCell>
                    <Skeleton className="h-4 w-20" />
            </TableCell>
            <TableCell>
                    <Skeleton className="h-4 w-20" />
            </TableCell>
          </TableRow>
      ))}
    </TableBody>
  );
};

export default CompanyTableSkeleton;
