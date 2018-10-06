import React from 'react';
import { string, func } from 'prop-types';
import mongooseErrorShape from '../../../shapes/MongooseError';

const Textarea = ({ label, onChange, fieldName, value, error }) => (
  <label htmlFor={`form-element-${fieldName}`}>
    <div>
      {label}
      {error ? <span> {error.message} </span> : ''}
    </div>
    <textarea
      id={`form-element-${fieldName}`}
      cols="80"
      rows="15"
      onChange={event => {
        onChange(event.target.value, fieldName);
      }}
      value={value}
    />
  </label>
);

Textarea.propTypes = {
  label: string.isRequired,
  onChange: func.isRequired,
  fieldName: string.isRequired,
  value: string,
  error: mongooseErrorShape
};

Textarea.defaultProps = {
  value: '',
  error: {}
};

export default Textarea;
