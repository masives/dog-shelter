import { arrayOf, func, shape, string } from 'prop-types';
import React from 'react';
import mongooseErrorShape from '../../../shapes/MongooseError';

const RadioGroup = ({ label, onChange, fieldName, options, value, error }) => (
  <div>
    <div>
      {label}
      {error ? <span> {error.message} </span> : ''}
    </div>
    {options.map((option) => (
      <label key={option.value} htmlFor={`${fieldName}-checkbox-${option.value}`}>
        <input
          type="radio"
          name={`checkbox-group-${fieldName}`}
          id={`${fieldName}-checkbox-${option.value}`}
          onChange={() => {
            onChange(option.value, fieldName);
          }}
          checked={option.value === value}
        />
        {option.label}
      </label>
    ))}
  </div>
);

RadioGroup.propTypes = {
  error: mongooseErrorShape,
  fieldName: string.isRequired,
  label: string.isRequired,
  onChange: func.isRequired,
  options: arrayOf(
    shape({
      label: string.isRequired,
      value: string.isRequired,
    }),
  ).isRequired,
  value: string,
};
RadioGroup.defaultProps = {
  error: {},
  value: '',
};

export default RadioGroup;
