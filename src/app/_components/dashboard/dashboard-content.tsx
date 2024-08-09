import UserInfoCard from "./user-info-card";
import DashboardCompanyList from "../companies/dashboard-company-list";
import SomaNews from "./news/soma-news";
import RecentNews from "./news/recent-news";

const DashboardContent = () => {
  return (
    <div className="flex">
      <div className="max-w-5xl mx-auto">
        <UserInfoCard />
        <DashboardCompanyList />
      </div>
      <div className="hidden lg:block mt-5 mx-auto w-[29%]">
        <SomaNews />
        <RecentNews />
      </div>
    </div>
  );
};

export default DashboardContent;
