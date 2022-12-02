// import React from 'react';
import {  Label } from 'components/Common/Common.styled';

export const Filter = props => {

  const handleFilter = evt => {
    props.onFiltred(evt.target.value);
  };

  return (
    <Label>
      Find contacts by name
      <input
        autoComplete="off"
        type="text"
        onChange={handleFilter}
      />
    </Label>
  );
};
