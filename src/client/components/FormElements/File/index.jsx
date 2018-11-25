import React from 'react';
import { string, func } from 'prop-types';
import mongooseErrorShape from '../../../shapes/MongooseError';
import { uploadPhoto } from '../../../resources/animalsApi';

const FileInput = ({ label, onChange, fieldName, error, value }) => (
  <label htmlFor={`form-element-${fieldName}`}>
    <div>
      {label}
      {error ? <span> {error.message} </span> : ''}
    </div>
    <input
      type="file"
      id={`form-element-${fieldName}`}
      onChange={(event) => {
        uploadPhoto(event.target.files[0]).then((filePath) => {
          onChange(filePath, fieldName);
        });
      }}
    />
    <img src={value} alt="" key={value} />
  </label>
);

FileInput.propTypes = {
  label: string.isRequired,
  onChange: func.isRequired,
  fieldName: string.isRequired,
  value: string,
  // type: string,
  error: mongooseErrorShape
};

FileInput.defaultProps = {
  // type: 'text',
  value: '',
  error: {}
};

export default FileInput;
