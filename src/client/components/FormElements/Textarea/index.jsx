import React from 'react';
import { string, func } from 'prop-types';

const Textarea = ({ label, onChange, fieldName }) => (
  <label htmlFor={`form-element-${fieldName}`}>
    {label}
    <textarea
      id={`form-element-${fieldName}`}
      cols="80"
      rows="15"
      onChange={event => {
        onChange(event.target.value, fieldName);
      }}
    />
  </label>
);

Textarea.propTypes = {
  label: string.isRequired,
  onChange: func.isRequired,
  fieldName: string.isRequired
};

export default Textarea;
