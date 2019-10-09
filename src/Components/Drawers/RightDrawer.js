import React, {useState} from 'react'
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  IconButton,
  Tab, 
  Tabs, 
  TabPanels, 
  TabPanel, 
  TabList
} from "@chakra-ui/core";
import MainDashboard from "../Dashboard/MainDashboard";
import Trends from '../Trends/Trends';
import './Drawer.css'
import MainMeta from '../Metadata/MainMeta';

const RightDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="right-drawer-content">
      <>
      <IconButton variantColor="blue" icon="check" onClick={() => setIsOpen(true)}>
        Analytics
      </IconButton>
      <Drawer
        isOpen={isOpen}
        size="md"
        zIndex={6}
        // placement="right"
        onClose={() => setIsOpen(false)}
      >
        <DrawerHeader borderBottomWidth="1px">Crime Analytics</DrawerHeader>
        <DrawerBody >
       
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
              <TabPanel className="background-for-tabs">
                {/* <Demographics/> */}
                <Trends/>
              </TabPanel>
              <TabPanel>
                <MainMeta/>
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