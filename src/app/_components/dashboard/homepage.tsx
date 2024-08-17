"use client";

import AdvertiseBand from "../home/advertise-band";
import DashboardContent from "./dashboard-content";
import FooterHomepage from "./footer-homepage";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import WaitlistWelcomePage from "../authentication/admin/waitlist-welcome-page";

const Homepage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, session, status]);

  if (session?.user.role === "waitlist") {
    return <WaitlistWelcomePage />;
  }

  return (
    <div className="">
      <div className="">
        <AdvertiseBand />
        <DashboardContent />
      </div>
      <div className="mx-auto my-6">
        <FooterHomepage />
      </div>
    </div>
  );
};

export default Homepage;
