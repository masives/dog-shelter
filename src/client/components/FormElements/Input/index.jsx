import React from 'react';
import { string, func } from 'prop-types';
import mongooseErrorShape from '../../../shapes/MongooseError';

const input = ({ label, onChange, fieldName, type, error }) => (
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
    />
  </label>
);

input.propTypes = {
  label: string.isRequired,
  onChange: func.isRequired,
  fieldName: string.isRequired,
  type: string,
  error: mongooseErrorShape
};

input.defaultProps = {
  type: 'text',
  error: {}
};

export default input;
