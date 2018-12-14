import { func, string } from 'prop-types';
import * as React from 'react';
import { uploadPhoto } from '../../../resources/animalsApi';
import mongooseErrorShape from '../../../shapes/MongooseError';
import IMongooseError from '../../../types/MongooseError';

interface IProps {
  label: string;
  onChange: (filePath: string, fieldName: string) => void;
  fieldName: string;
  value ?: string;
  error ?: IMongooseError;
}

const handleFileUpload = (event, onChange, fieldName) => {
  uploadPhoto(event.target.files[0]).then((filePath) => {
    onChange(filePath, fieldName);
  });
};

const FileInput = ({ label, onChange, fieldName, error, value= '' }: IProps) => (
  <label htmlFor={`form-element-${fieldName}`}>
    {/* // todo style properly */}
    <style>{`.photo{max-width: 300px}`}</style>
    <div>
      {label}
      {error ? <span> {error.message} </span> : ''}
    </div>
    <input
      type="file"
      id={`form-element-${fieldName}`}
      onChange={(event) => handleFileUpload(event, onChange, fieldName)}
    />
    <br />
    <img src={value} alt="" key={value} className="photo" />
  </label>
);

export default FileInput;
