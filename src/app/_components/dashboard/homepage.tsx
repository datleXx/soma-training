import AdvertiseBand from "../home/advertise-band";
import DashboardContent from "./dashboard-content";
import FooterHomepage from "./footer-homepage";

const Homepage = () => {
  return (
    <div>
      <div>
        <AdvertiseBand />
        <DashboardContent />
      </div>
      <div className="my-6 max-w-7xl mx-auto ">
        <FooterHomepage />
      </div>
    </div>
  );
};

export default Homepage;
