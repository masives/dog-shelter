import React from 'react';
import { string, func, arrayOf, shape } from 'prop-types';
import mongooseErrorShape from '../../../shapes/MongooseError';

const RadioGroup = ({ label, onChange, fieldName, options, error }) => (
  <div>
    <div>
      {label}
      {error ? <span> {error.message} </span> : ''}
    </div>
    {options.map(option => (
      <label key={option.value} htmlFor={`${fieldName}-checkbox-${option.value}`}>
        <input
          type="radio"
          name={`checkbox-group-${fieldName}`}
          id={`${fieldName}-checkbox-${option.value}`}
          onChange={() => {
            onChange(option.value, fieldName);
          }}
        />
        {option.label}
      </label>
    ))}
  </div>
);

RadioGroup.propTypes = {
  label: string.isRequired,
  onChange: func.isRequired,
  fieldName: string.isRequired,
  options: arrayOf(
    shape({
      label: string.isRequired,
      value: string.isRequired
    })
  ).isRequired,
  error: mongooseErrorShape
};
RadioGroup.defaultProps = {
  error: {}
};

export default RadioGroup;
