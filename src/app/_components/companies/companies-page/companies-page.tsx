import CompaniesSearchBar from "./companies-search-bar";
import CompaniesTable from "./companies-table";
import VerticalFilterBar from "./vertical-filter-bar";

const CompaniesPage = () => {
  return (
    <div className="flex relative">
      {/* Left Div */}
      <div className="h-full overflow-y-auto">
        <VerticalFilterBar />
      </div>

      {/* Right Div */}
      <div className="h-full w-4/5 p-2 overflow-x-scroll">
        <CompaniesSearchBar />
        <CompaniesTable />
      </div>
    </div>
  );
};

export default CompaniesPage;
