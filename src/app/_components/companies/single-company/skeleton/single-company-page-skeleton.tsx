import HeadTabSkeleton from "./head-tab-skeleton";
import ContentSkeleton from "./content-skeleton";

export const SingleCompanyPageSkeleton = () => {
  return (
    <div className="relative w-[calc(100vw-7rem)] px-4 sm:px-6 lg:px-8">
      <HeadTabSkeleton />
      <div className="mt-5 w-full">
        <ContentSkeleton />
      </div>
    </div>
  );
};
