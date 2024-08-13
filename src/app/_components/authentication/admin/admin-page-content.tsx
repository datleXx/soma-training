import UserInfoCard from "../../dashboard/user-info-card";
import SomaNews from "../../dashboard/news/soma-news";
import RecentNews from "../../dashboard/news/recent-news";
import AdminBoard from "./admin-board";

const AdminPageContent = () => {
  return (
    <div className="mx-auto grid min-h-full grid-cols-1 space-x-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
      <div className="grid grid-cols-1 lg:col-span-2">
        <UserInfoCard />
        <AdminBoard /> 
      </div>
      <div className="col-span-1 mt-5 hidden lg:block">
        <SomaNews />
        <RecentNews />
      </div>
    </div>
  );
};

export default AdminPageContent;
