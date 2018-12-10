import { func, string } from 'prop-types';
import React from 'react';
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
      onChange={(event) => {
        onChange(event.target.value, fieldName);
      }}
      value={value}
    />
  </label>
);

Textarea.propTypes = {
  error: mongooseErrorShape,
  fieldName: string.isRequired,
  label: string.isRequired,
  onChange: func.isRequired,
  value: string,
};

Textarea.defaultProps = {
  error: {},
  value: '',
};

export default Textarea;
