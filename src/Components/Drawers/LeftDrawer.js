import React from 'react'
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Tab,
  Tabs, 
  TabList, 
  TabPanels, 
  TabPanel
} from "@chakra-ui/core";
import FilterList from './LeftTabOne';

const LeftDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="left-drawer-content">
      <>
      <Button variantColor="teal" onClick={() => setIsOpen(true)}>
        Filter
      </Button>
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

export default LeftDrawer