import {
  Card,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Select,
  SelectItem,
  Divider,
} from "@tremor/react";
import UserTable from "./user-table";
import WaitlistTable from "./waitlist-table";

const AdminBoard = () => {
  return (
    <Card className="my-6 w-full h-[calc(100vh-12rem)] rounded shadow-lg">
      <h1 className="text-lg font-medium">Admin Board</h1>
      <TabGroup className="mt-4">
        <TabList>
            <Tab>
                Users
            </Tab>
            <Tab>
                Waitlist
            </Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <div>
                    <UserTable />
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <WaitlistTable />
                </div>
            </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default AdminBoard;
