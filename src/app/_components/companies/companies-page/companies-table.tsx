"use client";

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
import { api } from "~/trpc/react";
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
  const { data: companies, isLoading } =
    api.companies.fetchMultipleCompanies.useQuery();
  console.log(companies);
  return (
    <Card className="mt-6 overflow-auto rounded shadow-lg">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Company</TableHeaderCell>
            <TableHeaderCell>Region</TableHeaderCell>
            <TableHeaderCell>Industry</TableHeaderCell>
            {/* <TableHeaderCell>Investment Date</TableHeaderCell> */}
            <TableHeaderCell>Valuation</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies?.map((company) => (
            <TableRow key={company.id}>
              <TableCell>
                <div className="flex items-center space-x-4">
                  <Image
                    src={company.logoUrl ?? ""}
                    alt={company.name ?? ""}
                    width={40}
                    height={40}
                  />
                  <div>
                    <div className="font-semibold text-black">
                      {company.name}
                    </div>
                    <div className="text-xs text-gray-500 whitespace-normal">
                      {company.oneLiner}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{company.region}</TableCell>
              <TableCell>Technology</TableCell>
              <TableCell>{company.valuation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CompaniesTable;
