import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext.js';
import { Flex,FlexColumn } from './components/Containers/Containers';
import Search from './components/Search';
import Navigation from './components/Navigation';
import PeopleList from './components/PeopleList';
import data from './titanic.json';
import styled from 'styled-components';
import Theme from './Theme.js';
const Container = styled(FlexColumn)`
  min-height: 100vh;
  padding: 1%;
`;

function App() {
  const people = data;
  const [peopleToShow, setPeopleToShow] = useState(data);
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState(5);
  const [nameFilter, setNameFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState({ min: 0, max: 100 });
  const [sexFilter, setSexFilter] = useState({ man: false, woman: false });
  //subir al inicio cuando cambia la pagina
  const title="Pasajeros del Titanic"
  document.title=title;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page, pagination]);
  return (
    <Theme>
      <AppContextProvider
        value={{
          people,
          peopleToShow,
          setPeopleToShow,
          page,
          setPage,
          pagination,
          setPagination,
          nameFilter,
          setNameFilter,
          sexFilter,
          setSexFilter,
          ageFilter,
          setAgeFilter,
        }}
      >
        <Container>
          <Flex justifyContent='space-between'justifySelf='flex-start' width="100%">
            <h1>{title}</h1>
            <Search />
          </Flex>
          <Navigation justifySelf='flex-start'/>
          <PeopleList />
          <Navigation justifySelf='flex-end' />
        </Container>
      </AppContextProvider>
    </Theme>
  );
}

export default App;
