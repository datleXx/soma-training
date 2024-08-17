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
    <div className="relative flex h-[calc(100vh-65px)] w-[calc(100vw-7rem)] items-stretch justify-center bg-gray-50 p-2">
      {/* Left Div */}
      <VerticalFilterBar />

      {/* Right Div */}
      <div className="flex h-full flex-col gap-y-4 overflow-hidden p-2 lg:w-full">
        <CompaniesSearchBar />
        <CompaniesTable />
      </div>
    </div>
  );
};

export default CompaniesPage;
