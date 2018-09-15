import React from 'react';
import { string, func } from 'prop-types';

const input = ({ label, onChange, fieldName, type }) => (
  <label htmlFor={`form-element-${fieldName}`}>
    {label}
    <input
      type={type}
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
  fieldName: string.isRequired,
  type: string
};
input.defaultProps = {
  type: 'text'
};

export default input;
