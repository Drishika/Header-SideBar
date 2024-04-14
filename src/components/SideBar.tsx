import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
} from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';
import SideBarContent from './SideBarContent';

interface Props {
  lapTopAndAbove: boolean,
  handleToggle: () => void
}
const SideBar = ({lapTopAndAbove, handleToggle }: Props) => {
  if(lapTopAndAbove) return <SideBarContent/>
  return (
    <Box>
      {/* Hamburger icon */}
      <IconButton
        icon={<MdMenu />}
        aria-label="Open sidebar"
        //onClick={handleToggle}
        position="fixed"
        top={4}
        left={4}
        zIndex={999}
      />

      {/* Sidebar */}
      <Drawer isOpen={true} placement="left" onClose={handleToggle}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
           <SideBarContent/>
       
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SideBar;
