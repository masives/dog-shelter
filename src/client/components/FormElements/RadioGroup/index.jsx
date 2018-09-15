import React from 'react';
import { string, func, arrayOf, shape } from 'prop-types';

const RadioGroup = ({ label, onChange, fieldName, options }) => (
  <div>
    {label}
    {/* <div>"takie propsy są tu</div> */}
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
  ).isRequired
};
RadioGroup.defaultProps = {};

export default RadioGroup;
