"use client";

import AdvertiseBand from "../home/advertise-band";
import DashboardContent from "./dashboard-content";
import FooterHomepage from "./footer-homepage";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === "unauthenticated") {
        router.push("/login");
    }
  }, [router, session, status]);

  return (
    <div className="">
      <div className="">
        <AdvertiseBand />
        <DashboardContent />
      </div>
      <div className="my-6 max-w-7xl mx-auto">
        <FooterHomepage />
      </div>
    </div>
  );
};

export default Homepage;
