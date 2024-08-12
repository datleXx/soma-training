import CompanyCard from "./company-card";
import { Button, Card, TableBody } from "@tremor/react";
import Link from "next/link";
import { api } from "~/trpc/react";
import DashboardCompanyListSkeleton from "./skeleton/dashboard-companylist-skeleton";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableHeaderCell,
} from "@tremor/react";

const DashboardCompanyList = () => {
  // const companies = [
  //   {
  //     companyImg:
  //       "https://storage.googleapis.com/pulumi-public-bucket-soma-78c41ee/95bd8ff0a6f17f5f8efacac24921105e79452b9f/Ramp-harmonic-logo",
  //     companyName: "Ramp",
  //     companyDescription:
  //       "Corporate credit card that focuses on helping businesses eliminate overspend",
  //     companyValuation: "$1.2B",
  //     companyType: "FinTech",
  //     companyBase: "US",
  //   },
  // ];
  const { data: companies, isLoading } = api.companies.fetchTenCompanies.useQuery();
  return (
    <Card className="mt-6 w-full rounded shadow-lg">
      <h1 className="p-5 text-xl font-medium">Soma Top Unicorn Breakouts</h1>

      <Table className="min-w-full">
        {isLoading ? <DashboardCompanyListSkeleton /> : (
        <TableBody className="">
          {companies?.map((company) => (
            <CompanyCard
              key={company.id}
              companyImg={company.logoUrl ?? ""}
              companyName={company.name ?? ""}
              companyDescription={company.oneLiner ?? ""}
              companyValuation={company.valuation ?? ""}
              companyType={"Technology"}
              companyBase={company.region ?? ""}
            />
          ))}
        </TableBody>
        )}
      </Table>
      <div className="mt-5">
        <Link href="/companies">
          <Button className="w-full rounded border border-gray-400 bg-white text-gray-500 hover:border-gray-500 hover:bg-gray-200">
            View all
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default DashboardCompanyList;
