import UserInfoCard from "./user-info-card";
import DashboardCompanyList from "../companies/dashboard-company-list";
import SomaNews from "./news/soma-news";

const DashboardContent = () => {
  return (
    <div className="flex">
      <div className="">
        <UserInfoCard />
        <DashboardCompanyList />
      </div>
      <div>
        <SomaNews />
      </div>
    </div>
  );
};

export default DashboardContent;
