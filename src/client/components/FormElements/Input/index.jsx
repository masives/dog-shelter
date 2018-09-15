import React from 'react';
import { string, func } from 'prop-types';

const input = ({ label, onChange, fieldName }) => (
  <label htmlFor={`form-element-${fieldName}`}>
    {label}
    <input
      type="text"
      id={`form-element-${fieldName}`}
      onChange={event => {
        onChange(event.target.value, fieldName);
      }}
    />
  </label>
);

input.propTypes = {
  label: string.isRequired,
  onChange: func.isRequired,
  fieldName: string.isRequired
};

export default input;
