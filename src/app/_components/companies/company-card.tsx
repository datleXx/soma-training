import Image from "next/image";
import { TableCell, TableRow } from "@tremor/react";

interface CompanyCardProps {
  companyImg: string;
  companyName: string;
  companyDescription: string;
  companyValuation: string;
  companyType: string;
  companyBase: string;
}

const CompanyCard = ({
  companyImg,
  companyName,
  companyDescription,
  companyValuation,
  companyType,
  companyBase,
}: CompanyCardProps) => {
  return (
    <TableRow className="hover:bg-gray-50">
      <TableCell className="flex gap-3 items-center">
        <Image
          className="rounded"
          src={companyImg}
          alt={companyName}
          width={60}
          height={60}
        />
        <div className="whitespace-normal">
          <h3 className="text-sm font-medium">{companyName}</h3>
          <p className="text-sm text-gray-400">{companyDescription}</p>
        </div>
      </TableCell>
      <TableCell className="hidden text-sm text-gray-500 lg:table-cell">
        {companyBase}
      </TableCell>
      <TableCell className="hidden lg:table-cell">
        <div className="rounded-full bg-green-100 p-2 text-center text-xs font-semibold text-green-800">
          {companyType}
        </div>
      </TableCell>
      <TableCell>
        <div className="rounded-full bg-green-100 p-2 text-center text-xs font-semibold text-green-800">
          {companyValuation}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default CompanyCard;
