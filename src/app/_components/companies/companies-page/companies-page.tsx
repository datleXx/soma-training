import CompaniesSearchBar from "./companies-search-bar";
import CompaniesTable from "./companies-table";
import VerticalFilterBar from "./vertical-filter-bar";

const CompaniesPage = () => {
  return (
    <div className="flex p-2">
      {/* Left Div */}
      <div className="sticky top-[66px] left-0 h-screen">
        <VerticalFilterBar />
      </div>

      {/* Right Div */}
      <div className="h-full w-4/5 p-2 overflow-auto">
        <CompaniesSearchBar />
        <CompaniesTable />
      </div>
    </div>
  );
};

export default CompaniesPage;
