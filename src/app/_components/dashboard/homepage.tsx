import Header from "../home/header";
import AdvertiseBand from "../home/advertise-band";
import VerticalSideBar from "./vertical-side-bar";
import UserInfoCard from "./user-info-card";
import DashboardContent from "./dashboard-content";

const Homepage = () => {
  return (
    <div className="">
      <div>
        <VerticalSideBar />
      </div>
      <div className="relative">
        <Header />
        <div className="absolute left-28 right-0 top-[66px]">
          <div>
            <AdvertiseBand />
            <DashboardContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
