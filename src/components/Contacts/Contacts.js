// import React, { Component } from 'react';
import { Box, Label } from '../Common/Common.styled';
export const Contacts = function ({ list, onFilter, onRemove, filterInput }) {
  function inputFilt (evt) {
    filterInput(evt)
  }

  return (
    <Box>
      <Label>
        Find contacts by name
        <input
          autoComplete="off"
          type="text"
          name="name"
          //   value={() => this.inputFilt()}
          onChange={onFilter}
        />
      </Label>
      <ul>
        {list.map(item => {
          return (
            <li key={item.id}>
              {item.name}:{item.number}
              <button onClick={() => onRemove(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
