import React, { useEffect, useContext, useCallback } from 'react';
import { AppContext } from '../../context/AppContext.js';
import { FormContainer, FieldContainer, AgeContainer } from './FormStyle.js';
import { Flex } from '../Containers/Containers';
import Slider from './Slider';
import Checkbox from './Checkbox.js';

function Search() {
  const context = useContext(AppContext);
  const {
    people,
    setPeopleToShow,
    nameFilter,
    setNameFilter,
    sexFilter,
    setSexFilter,
    ageFilter,
    setAgeFilter,
  } = context;
  let { min: minAge, max: maxAge } = ageFilter;
  //filtros

  const updatePeopleCallback = useCallback(() => {
    const filterByName = (array) => {
      return array.filter((p) =>
        p.fields.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    };
    const filterBySex = (array) => {
      const { man, woman } = sexFilter;

      if (man === woman) {
        return array;
      }
      if (man) {
        return array.filter((p) => p.fields.sex === 'male');
      }
      if (woman) {
        return array.filter((p) => p.fields.sex === 'female');
      }
    };
    const filterByAge = (array) => {
      return array.filter(
        (p) => p.fields.age > minAge && p.fields.age < maxAge
      );
    };
    //combinacion de filtros
    const filterPeople = (array) => {
      let result = filterByName(array);
      result = filterBySex(result);
      result = filterByAge(result);
      return result;
    };
    const newPeople = filterPeople(people);
    setPeopleToShow(newPeople);
  }, [people, nameFilter, sexFilter, minAge, maxAge, setPeopleToShow]);
  
  useEffect(() => {
    updatePeopleCallback();
  }, [updatePeopleCallback]);
  //manejo de cambios en el formulario
  const changeHandler = (event) => {
    const eName = event.target.name;
    const eValue = event.target.value;
    let checked = event.target.checked || false;
    switch (eName) {
      case 'name':
        setNameFilter(eValue);
        break;

      case 'man':
        checked = event.target.checked;
        setSexFilter({ ...sexFilter, man: checked });
        break;

      case 'woman':
        checked = event.target.checked;
        setSexFilter({ ...sexFilter, woman: checked });
        break;

      default:
        break;
    }
  };
  const submit = (event) => {
    event.preventDefault();
  };
  return (
    <FormContainer onSubmit={submit}>
      <h2> Buscar</h2>
      <FieldContainer>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={changeHandler}
          value={nameFilter}
        />
      </FieldContainer>
      <FieldContainer>
        <label htmlFor="sex">Sexo</label>
        <Flex width="100%">
          <Checkbox title="hombre" forTitle="man" onChange={changeHandler} />
          <Checkbox title="mujer" forTitle="woman" onChange={changeHandler} />
        </Flex>
      </FieldContainer>
      <FieldContainer>
        <label>edad</label>
        <AgeContainer width="100%">
          <div>0</div>
          <div>80</div>
        </AgeContainer>
        <Slider name='Age' minRange={0} maxRange={80} onChange={setAgeFilter} />
        <AgeContainer width="100%">
          <label htmlFor='minAge'>Minima:{minAge}</label>
          <label htmlFor='maxAge'>Maxima:{maxAge}</label>
        </AgeContainer>
      </FieldContainer>
    </FormContainer>
  );
}

export default Search;
