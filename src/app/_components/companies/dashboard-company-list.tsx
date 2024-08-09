import CompanyCard from "./company-card";
import { Button, Card } from "@tremor/react";
import Link from "next/link";

const DashboardCompanyList = () => {
  const companies = [
    {
      companyImg:
        "https://storage.googleapis.com/pulumi-public-bucket-soma-78c41ee/95bd8ff0a6f17f5f8efacac24921105e79452b9f/Ramp-harmonic-logo",
      companyName: "Ramp",
      companyDescription:
        "Corporate credit card that focuses on helping businesses eliminate overspend",
      companyValuation: "$1.2B",
      companyType: "FinTech",
      companyBase: "US",
    },
  ];
  return (
    <Card className="mt-6 rounded shadow-lg">
      <h1 className="p-5 text-xl font-medium">Soma Top Unicorn Breakouts</h1>
      <div className="">
        {Array.from({ length: 10 }).map((_, index) => (
          <CompanyCard
            key={index}
            companyImg={companies[0]?.companyImg ?? ""}
            companyName={companies[0]?.companyName ?? ""}
            companyDescription={companies[0]?.companyDescription ?? ""}
            companyValuation={companies[0]?.companyValuation ?? ""}
            companyType={companies[0]?.companyType ?? ""}
            companyBase={companies[0]?.companyBase ?? ""}
          />
        ))}
      </div>
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
