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
import Filter from '../Filter/Filter';
import AgencyData from '../Filter/AgencyData';

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
            <Tab>Checkboxes</Tab>
            <Tab>Offense Filter</Tab>
            <Tab>Time Filter</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FilterList/>
            </TabPanel>
            <TabPanel>
              <Filter/>
            </TabPanel>
            <TabPanel>
 <AgencyData/>
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