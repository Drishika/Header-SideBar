import { HStack, IconButton } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';
import ColorModeSwitch from './ColorModeSwitch';

interface Props {
  lapTopAndAbove: boolean,
  toggleSideBar: () => void;
}
const Header = ({lapTopAndAbove, toggleSideBar }: Props) => {
  return (
    <div>
      <HStack padding="10px" justifyContent={'flex-end'}>
        <ColorModeSwitch />
        {!lapTopAndAbove && <IconButton
          icon={<MdMenu />}
          aria-label="Open sidebar"
          onClick={toggleSideBar}
          zIndex={999}
        />}
      </HStack>
    </div>
  );
};

export default Header;
