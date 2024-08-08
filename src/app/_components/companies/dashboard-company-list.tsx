import CompanyCard from "./company-card";
import { Button } from "@tremor/react";

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
    <div className="mx-7 mt-6 max-w-xl rounded-lg border border-gray-200 p-5 shadow-lg">
      <h1 className="text-xl font-medium">Soma Top Unicorn Breakouts</h1>
      <div className="mt-5">
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
        <Button className="w-full rounded border border-gray-400 bg-white text-gray-500 hover:border-gray-500 hover:bg-gray-200">
          View all
        </Button>
      </div>
    </div>
  );
};

export default DashboardCompanyList;
