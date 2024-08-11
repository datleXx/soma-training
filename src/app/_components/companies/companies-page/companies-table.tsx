import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@tremor/react";
import Image from "next/image";
const companies = [
  {
    companyImg:
      "https://storage.googleapis.com/pulumi-public-bucket-soma-78c41ee/95bd8ff0a6f17f5f8efacac24921105e79452b9f/Ramp-harmonic-logo",
    companyName: "Ramp",
    companyDescription:
      "Corporate credit card that focuses on helping businesses eliminate overspend",
    region: "US",
    industry: "FinTech",
    investmentDate: "4/8/2020",
    valuation: "+5b",
  },
];

const CompaniesTable = () => {
  return (
    <Card className="mt-6 rounded shadow-lg overflow-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Company</TableHeaderCell>
            <TableHeaderCell>Region</TableHeaderCell>
            <TableHeaderCell>Industry</TableHeaderCell>
            <TableHeaderCell>Investment Date</TableHeaderCell>
            <TableHeaderCell>Valuation</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 20 }, (_, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex items-center space-x-4">
                  <Image
                    src={companies[0]?.companyImg ?? ""}
                    alt={companies[0]?.companyName ?? ""}
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="font-semibold text-black">
                      {companies[0]?.companyName}
                    </div>
                    <div className="text-xs text-gray-500">
                      {companies[0]?.companyDescription}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{companies[0]?.region}</TableCell>
              <TableCell>{companies[0]?.industry}</TableCell>
              <TableCell>{companies[0]?.investmentDate}</TableCell>
              <TableCell>{companies[0]?.valuation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CompaniesTable;
