import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Card,
  Divider,
} from "@tremor/react";
import SingleCompanyAboutTab from "./single-company-about-tab";
import FounderRecentNew from "./founder-recent-new";

interface SingleCompanyContentSectionProps {
  about: string;
  oneLiner: string;
  website: string;
  region: string;
  primarySector: string;
  otherSectors: string;
  valuation: string;
}

const SingleCompanyContentSection = ({
  about,
  oneLiner,
  website,
  region,
  primarySector,
  otherSectors,
  valuation,
}: SingleCompanyContentSectionProps) => {
  return (
    <TabGroup>
      <TabList>
        <Tab>About</Tab>
        <Tab>News</Tab>
      </TabList>
      <TabPanels className="mt-5">
        <TabPanel className="grid grid-cols-1 gap-5 lg:grid-cols-6">
          <div className="col-span-1 lg:col-span-4">
            <SingleCompanyAboutTab
              about={about}
              oneLiner={oneLiner}
              website={website}
              region={region}
              primarySector={primarySector}
              otherSectors={otherSectors}
              valuation={valuation}
            />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <FounderRecentNew />
          </div>
        </TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default SingleCompanyContentSection;
