import { Suspense } from "react";
import CompaniesSearchBar from "./companies-search-bar";
import CompaniesTable from "./companies-table";
import VerticalFilterBar from "./vertical-filter-bar";

const CompaniesPage = () => {
  return (
    <div className="flex p-2">
      {/* Left Div */}
      <div className="sticky left-0 top-[66px] h-screen">
        <VerticalFilterBar />
      </div>

      {/* Right Div */}
      <div className="h-full w-4/5 overflow-auto p-2">
        <Suspense>
          <CompaniesSearchBar />
        </Suspense>
        <CompaniesTable />
      </div>
    </div>
  );
};

export default CompaniesPage;
