import React, {useState} from 'react'
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Tab, 
  Tabs, 
  TabPanels, 
  TabPanel, 
  TabList
} from "@chakra-ui/core";
import MainDashboard from "../Dashboard/MainDashboard";

const RightDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="right-drawer-content">
      <>
      <Button variantColor="teal" onClick={() => setIsOpen(true)}>
        Analytics
      </Button>
      <Drawer
        isOpen={isOpen}
        size="md"
        zIndex={6}
        placement="right"
        onClose={() => setIsOpen(false)}
      >
        <DrawerHeader borderBottomWidth="1px">Crime Analytics</DrawerHeader>
        <DrawerBody>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>Dashboard</Tab>
              <Tab>Trends</Tab>
              <Tab>MetaData</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <MainDashboard/>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerBody>
      </Drawer>
    </>
    </div>
  )
}

export default RightDrawer