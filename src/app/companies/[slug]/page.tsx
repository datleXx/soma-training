"use client";

import SingleCompanyHeadTab from "~/app/_components/companies/single-company/single-company-head-tab";
import SingleCompanyContentSection from "~/app/_components/companies/single-company/single-company-content-section";
import { SingleCompanyPageSkeleton } from "~/app/_components/companies/single-company/skeleton/single-company-page-skeleton";
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";
import WaitlistWelcomePage from "~/app/_components/authentication/admin/waitlist-welcome-page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface SingleCompanyPageProps {
  params: {
    slug: string;
  };
}

export default function SingleCompanyPage({ params }: SingleCompanyPageProps) {
  const { slug } = params;
  const { data: company, isLoading } =
    api.companies.fetchCompanyWithSlug.useQuery({ slug });

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
    <>
      {isLoading ? (
        <SingleCompanyPageSkeleton />
      ) : (
        <div className="relative px-4 sm:px-6 lg:px-8">
          <SingleCompanyHeadTab
            logoUrl={company?.logoUrl ?? ""}
            slug={company?.slug ?? ""}
            name={company?.name ?? ""}
          />
          <div className="mt-6">
            <SingleCompanyContentSection
              about={company?.oneLiner ?? ""}
              oneLiner={company?.oneLiner ?? ""}
              website={company?.websiteUrl ?? ""}
              region={company?.region ?? ""}
              primarySector={
                company?.sectors
                  .map((sector) => (sector.primary ? sector.name : ""))
                  .join(", ") ?? ""
              }
              otherSectors={
                company?.sectors
                  .map((sector) => (sector.primary ? "" : sector.name))
                  .join(", ") ?? ""
              }
              valuation={company?.valuation ?? ""}
            />
          </div>
        </div>
      )}
    </>
  );
}
