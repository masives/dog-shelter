import React from 'react';
import { string, number, func, oneOfType } from 'prop-types';
import mongooseErrorShape from '../../../shapes/MongooseError';

const input = ({ label, onChange, fieldName, type, value, error }) => (
  <label htmlFor={`form-element-${fieldName}`}>
    <div>
      {label}
      {error ? <span> {error.message} </span> : ''}
    </div>
    <input
      type={type}
      id={`form-element-${fieldName}`}
      onChange={event => {
        onChange(event.target.value, fieldName);
      }}
      value={value}
    />
  </label>
);

input.propTypes = {
  label: string.isRequired,
  onChange: func.isRequired,
  fieldName: string.isRequired,
  value: oneOfType([string, number]),
  type: string,
  error: mongooseErrorShape
};

input.defaultProps = {
  type: 'text',
  value: '',
  error: {}
};

export default input;
