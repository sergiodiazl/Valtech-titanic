import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext.js';
import { PaginationButton } from '../Buttons/Buttons';
import {Container,ButtonWrapper}from './PaginationStyle'
export default function Pagination() {
  const context = useContext(AppContext);
  const { page, peopleToShow, pagination, setPagination } = context;
  const maxPage = Math.ceil(peopleToShow.length / pagination);
  return (
    <Container width="40%">
      <div>
        Pagina{page +1} de {maxPage}
      </div>
      <div>Resultados por pagina: {pagination}</div>
      <ButtonWrapper width="50%">
        <PaginationButton onClick={() => setPagination(5)}>5</PaginationButton>
        <PaginationButton onClick={() => setPagination(10)}>
          10
        </PaginationButton>
        <PaginationButton onClick={() => setPagination(20)}>
          20
        </PaginationButton>
      </ButtonWrapper>
    </Container>
  );
}
