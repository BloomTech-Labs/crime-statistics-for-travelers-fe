import React from 'react';
import './Drawer.css'
import {
    Button,
    Drawer,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
  } from "@chakra-ui/core";


  export default function SizeExample() {
    const [size, setSize] = React.useState("sm");
    const [isOpen, setIsOpen] = React.useState(false);
  
    const openDrawer = () => setIsOpen(true);
    const closeDrawer = () => setIsOpen(false);
  
    const handleClick = newSize => {
      setSize(newSize);
      openDrawer();
    };
  
    const sizes = ["xs", "sm"];
  
    return (
      <>
        {sizes.map(size => (
          <Button
          id="drawer-button"
            onClick={() => handleClick(size)}
            type="button"
            key={size}
            m={4}
          >{`Open ${size} Drawer`}</Button>
        ))}
  
        <Drawer zIndex={6} onClose={closeDrawer} isOpen={isOpen} size={size}>
          <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
          {size === "full"
            ? `You're trapped 😆, refresh the page to leave`
            : null}
        </Drawer>
      </>
    );
  }