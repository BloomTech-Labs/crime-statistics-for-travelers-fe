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
              <Tab>Crime Analytics</Tab>
              <Tab>Crime Data</Tab>
              <Tab>Trending Crime</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p className="p">one!</p>
              </TabPanel>
              <TabPanel>
                <p className="p">two!</p>
              </TabPanel>
              <TabPanel>
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

export default RightDrawer