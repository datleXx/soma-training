import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react";
import AboutTabSkeleton from "./about-tab-skeleton";
import RecentNewsSkeleton from "./recent-news-skeleton";
import FounderIntroSkeleton from "./founder-intro-skeleton";

const ContentSkeleton = () => {
  return (
    <TabGroup>
      <TabList>
        <Tab>About</Tab>
        <Tab>News</Tab>
      </TabList>
      <TabPanels className="mt-5">
        <TabPanel className="grid grid-cols-1 gap-5 lg:grid-cols-6">
          <div className="col-span-1 lg:col-span-4">
            <AboutTabSkeleton />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <FounderIntroSkeleton />
            <RecentNewsSkeleton />
          </div>
        </TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default ContentSkeleton;
