import React from 'react';
import Input from './Input';
import RadioGroup from './RadioGroup';
import Textarea from './Textarea';

const FormElementsFactory = ({ inputConfig, onChange, error }) => {
  let formItem;
  if (inputConfig.type === 'Input') {
    formItem = (
      <Input
        label={inputConfig.label}
        fieldName={inputConfig.fieldName}
        onChange={onChange}
        key={inputConfig.fieldName}
        error={error}
      />
    );
  }
  if (inputConfig.type === 'Number') {
    formItem = (
      <Input
        label={inputConfig.label}
        fieldName={inputConfig.fieldName}
        onChange={onChange}
        key={inputConfig.fieldName}
        type="number"
        error={error}
      />
    );
  }
  if (inputConfig.type === 'RadioGroup') {
    formItem = (
      <RadioGroup
        label={inputConfig.label}
        fieldName={inputConfig.fieldName}
        onChange={onChange}
        key={inputConfig.fieldName}
        options={inputConfig.options}
        error={error}
      />
    );
  }
  if (inputConfig.type === 'Textarea') {
    formItem = (
      <Textarea
        label={inputConfig.label}
        fieldName={inputConfig.fieldName}
        onChange={onChange}
        key={inputConfig.fieldName}
        error={error}
      />
    );
  }
  if (!formItem) {
    throw new Error('Form item is invalid');
  }
  return formItem;
};

export default FormElementsFactory;
