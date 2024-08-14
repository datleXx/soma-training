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
import { getValuation } from "~/helper/companiesHelper";

const DashboardCompanyList = () => {

  const { data: companies, isLoading } = api.companies.fetchTenCompanies.useQuery();
  return (
    <Card className="mt-6 w-full rounded-md">
      <h1 className="p-5 text-xl font-medium">Soma Top Unicorn Breakouts</h1>

      <Table className="min-w-full">
        {isLoading ? <DashboardCompanyListSkeleton /> : (
        <TableBody className="">
          {companies?.map((company) => (
            <CompanyCard
              key={company.id}
              companyImg={company.logoUrl ?? ""}
              companyName={company.name ?? ""}
              companySlug={company.slug ?? ""}
              companyDescription={company.oneLiner ?? ""}
              companyValuation={getValuation(company.valuation ?? 7)}
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
