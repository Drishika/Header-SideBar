import { Text, Button, VStack } from '@chakra-ui/react';
import { MdOutlineReplay } from 'react-icons/md';
import { MdOutlineCrisisAlert } from 'react-icons/md';
import { MdOutlineSearch } from 'react-icons/md';
import { MdOutlineDashboard } from 'react-icons/md';
import { TfiWrite } from 'react-icons/tfi';

const SideBarContent = () => {
  return (
    <VStack spacing={5} paddingTop={5}>
      <Button
        width="100%"
        backgroundColor="white"
        leftIcon={<MdOutlineDashboard />}
        iconSpacing={2} // Adjust the spacing between icon and text
        justifyContent="flex-start" // Align content to the start
      >
        <Text>Dashboard</Text>
      </Button>
      <Button
        width="100%"
        backgroundColor="white"
        leftIcon={<MdOutlineSearch />}
        iconSpacing={2} // Adjust the spacing between icon and text
        justifyContent="flex-start" // Align content to the start
      >
        Search
      </Button>
      <Button
        width="100%"
        backgroundColor="white"
        leftIcon={<MdOutlineCrisisAlert />}
        iconSpacing={2} // Adjust the spacing between icon and text
        justifyContent="flex-start" // Align content to the start
      >
        Exceptions
      </Button>
      <Button
        width="100%"
        backgroundColor="white"
        leftIcon={<MdOutlineReplay />}
        iconSpacing={2} // Adjust the spacing between icon and text
        justifyContent="flex-start" // Align content to the start
      >
        Replay
      </Button>
      <Button
        width="100%"
        backgroundColor="white"
        leftIcon={<TfiWrite />}
        iconSpacing={2} // Adjust the spacing between icon and text
        justifyContent="flex-start" // Align content to the start
      >
        Override
      </Button>
    </VStack>
  );
};

export default SideBarContent;
