import * as React from 'react';
import IMongooseError from '../../../types/MongooseError';

interface IProps {
  label: string;
  onChange: (value: string, fieldName: string ) => void;
  fieldName: string;
  value: string | number;
  type?: string;
  error?: IMongooseError;
}

const input = ({ label, onChange, fieldName, type = 'text', value = '', error }: IProps) => (
  <label htmlFor={`form-element-${fieldName}`}>
    <div>
      {label}
      {error ? <span> {error.message} </span> : ''}
    </div>
    <input
      type={type}
      id={`form-element-${fieldName}`}
      onChange={(event) => onChange(event.target.value, fieldName)}
      value={value}
    />
  </label>
);

export default input;
