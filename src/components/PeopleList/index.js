import React, { useEffect, useContext, useRef,useCallback } from 'react';
import { AppContext } from '../../context/AppContext.js';
import styled from 'styled-components';
import Person from './Person';
import { FlexColumn } from '../Containers/Containers.js';
import PeopleListStyle from './PeopleListStyle'
const NoResult = styled.div`
   width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
  background: ${({ theme }) => theme.colors.light};

  box-shadow: ${({ theme }) => theme.shadows.main};
  border-radius: 0 0 5px 5px;
  padding: 1%;
  text-align: center;
  align-self:center;
`;
const Container = styled(FlexColumn)`
  align-items: flex-start;
  
`;

const PeopleList = (props) => {
  const context = useContext(AppContext);
  const { peopleToShow, page, setPage, pagination } = context;
  let listStart = (page ) * pagination;
  const peopleInPage = peopleToShow.slice(listStart, listStart + pagination);
  const renderList = peopleInPage.map((p) => {
    const { fields: info, recordid: id } = p;
    return <Person key={id} info={info} />;
  });
  const setPageCallback=useCallback(
      (value) => {
          setPage(value)
      },
      [setPage],
  )
  //guarda la paginacion
  const prevStartRef = useRef(listStart);
  
  useEffect(() => {
    prevStartRef.current = listStart;
  });
  const prevStart = prevStartRef.current;
  //ajusta la pagina actual de acuerdo a donde arracaba antes de cambiar la paginacion
  useEffect(() => {
   
 
  const adjustedPage = Math.floor(prevStart / pagination);
    setPageCallback(adjustedPage);
  }, [pagination,setPageCallback]);
  return (
    <Container width="100%">
      <PeopleListStyle>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Sexo</th>
            <th>Edad</th>
          </tr>
        </thead>
        {peopleInPage.length > 0 ? <tbody>{renderList}</tbody> : null}
      </PeopleListStyle>
      {peopleInPage.length === 0 ? (
        <NoResult>No hay personas con esa descripción</NoResult>
      ) : null}
    </Container>
  );
};
export default PeopleList;
