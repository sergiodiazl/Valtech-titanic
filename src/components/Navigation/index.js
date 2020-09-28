import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext.js';
import Pagination from '../Pagination';
import { NavButton } from '../Buttons/Buttons';
import {NavContainer } from './NavigationStyle';


function Navigation() {
  const context = useContext(AppContext);
  const { page, setPage, peopleToShow, pagination } = context;
  const [maxPage, setMaxPage] = useState(Math.ceil(peopleToShow.length / pagination));
  
  useEffect(() => {
    setMaxPage(Math.ceil(peopleToShow.length / pagination));
  }, [peopleToShow, pagination]);
  return (
    <NavContainer as="nav">
      <NavButton 
      prev 
      onClick={() => setPage(page - 1)} 
      disabled={page === 0}>
        Anterior
      </NavButton>
      <Pagination maxPage={maxPage} />
      <NavButton
        next
        onClick={() => setPage(page + 1)}
        disabled={page+1 >=maxPage}
      >
        Siguiente
      </NavButton>
    </NavContainer>
  );
}

export default Navigation;
