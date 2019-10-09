import React from 'react';
import {
    Drawer,
    DrawerHeader,
    DrawerBody,
    useDisclosure,
    Button,
    DrawerOverlay,
    DrawerContent
  } from "@chakra-ui/core";

export default function BottomDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState("bottom");
    // const handlePlacementChange = event => setPlacement(event.target.value);
  
    return (
      <>
        {/* <RadioGroup
          isInline
          spacing={5}
          defaultValue={placement}
          onChange={handlePlacementChange}
          mb={6}
        >
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </RadioGroup> */}
        <Button variantColor="blue" onClick={onOpen}>
         Change Map Style
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }