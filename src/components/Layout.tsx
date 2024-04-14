import SideBar from './SideBar';
import { Grid, GridItem, useMediaQuery, Text } from '@chakra-ui/react';

import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lapTopAndAbove] = useMediaQuery('(min-width: 1024px)');
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav"
                    "aside main"
                    "footer footer"
                    `,
        base: `"nav" "main" " footer"`,
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area={'nav'}>
        <Header
          lapTopAndAbove={lapTopAndAbove}
          toggleSideBar={() => setIsOpen(!isOpen)}
        />
      </GridItem>
      <Text>{lapTopAndAbove ? 'largescreen' : 'small screen'}</Text>
      <Text>{isOpen ? ' side bar - open' : ' Side bar - closed'}</Text>

      {(isOpen || lapTopAndAbove) && (
        <GridItem area="aside">
          <SideBar lapTopAndAbove={lapTopAndAbove} handleToggle={() => setIsOpen(!isOpen)} />
        </GridItem>
      )}
      <GridItem bg="green.300" area="main">
        <Main />
      </GridItem>
      <GridItem bg="blue.300" area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
