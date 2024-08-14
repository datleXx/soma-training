"use client";

import { Suspense, useEffect } from "react";
import CompaniesSearchBar from "./companies-search-bar";
import CompaniesTable from "./companies-table";
import VerticalFilterBar from "./vertical-filter-bar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import WaitlistWelcomePage from "../../authentication/admin/waitlist-welcome-page";

const CompaniesPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (session?.user.role === "waitlist") {
    return <WaitlistWelcomePage />;
  }

  return (
    <div className="flex p-2">
      {/* Left Div */}
      <div className="sticky left-0 top-[66px] h-screen">
        <Suspense>
          <VerticalFilterBar />
        </Suspense>
      </div>

      {/* Right Div */}
      <div className="h-full w-4/5 overflow-auto p-2">
        <Suspense>
          <CompaniesSearchBar />
        </Suspense>
        <CompaniesTable />
      </div>
    </div>
  );
};

export default CompaniesPage;
