import React from 'react';
const Person = ({ info }) => {
  const { name, age, sex } = info;
  return (
    <tr>
      <td>{name}</td>
      <td>{sex}</td>
      <td>{age}</td>
    </tr>
  );
};
export default Person;
