import * as React from 'react';
import IMongooseError from '../../../types/MongooseError';

interface IRadioGroupOption {
  label: string;
  value: string;
}

type IOnRadioGroupChange = (value: string, fieldName: string) => void;

interface IProps {
  error: IMongooseError;
  fieldName: string;
  label: string;
  onChange: IOnRadioGroupChange;
  options: IRadioGroupOption[];
  value: string;
}

const getRadioGroup = (option: IRadioGroupOption, fieldName: string, value: string, onChange: IOnRadioGroupChange) => (
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
);

const RadioGroup = ({ label, onChange, fieldName, options, value, error }: IProps) => (
  <div>
    <div>
      {label}
      {error ? <span> {error.message} </span> : ''}
    </div>
    {options.map((option) => getRadioGroup(option, fieldName, value, onChange))}
  </div>
);

export default RadioGroup;
