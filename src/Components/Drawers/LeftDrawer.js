import React from 'react'
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  IconButton,
  Tab,
  Tabs, 
  TabList, 
  TabPanels, 
  TabPanel
} from "@chakra-ui/core";
import FilterList from './LeftTabOne';
import TestGet from '../crimeometer/testGet';

const LeftDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="left-drawer-content">
      <>
      <IconButton variantColor="blue" icon="search" variant = "solid" onClick={() => setIsOpen(true)}>
        Filter
      </IconButton>
      <Drawer
        isOpen={isOpen}
        size="md"
        zIndex={6}
        placement="left"
        onClose={() => setIsOpen(false)}
      >
        <DrawerHeader borderBottomWidth="1px">Crime Filter</DrawerHeader>
        <DrawerBody>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Crime Filter</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FilterList/>
            </TabPanel>
            <TabPanel>
              <p className="p">two!</p>
            </TabPanel>
            <TabPanel>
              <TestGet/>
              <p className="p">three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </DrawerBody>
      </Drawer>
    </>
    </div>
  )
}

export default LeftDrawer