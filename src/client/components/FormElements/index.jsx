import React from 'react';
import Input from './Input';
import RadioGroup from './RadioGroup';
import Textarea from './Textarea';

const FormElementsFactory = ({ inputConfig, onChange }) => {
  let formItem;
  if (inputConfig.type === 'Input') {
    formItem = (
      <Input
        label={inputConfig.label}
        fieldName={inputConfig.fieldName}
        onChange={onChange}
        key={inputConfig.fieldName}
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
      />
    );
  }
  if (!formItem) {
    throw new Error('Coś sie spierdoliło');
  }
  return formItem;
};

export default FormElementsFactory;
