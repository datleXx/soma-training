import UserInfoCard from "./user-info-card";
import DashboardCompanyList from "../companies/dashboard-company-list";
import SomaNews from "./news/soma-news";
import RecentNews from "./news/recent-news";

const DashboardContent = () => {
  return (
    <div className="min-h-full px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-3 space-x-5">
      <div className="lg:col-span-2 grid grid-cols-1">
        <UserInfoCard />
        <DashboardCompanyList />
      </div>
      <div className="hidden lg:block mt-5 col-span-1">
        <SomaNews />
        <RecentNews />
      </div>
    </div>
  );
};

export default DashboardContent;
