import React from 'react';
import { string, func } from 'prop-types';
import mongooseErrorShape from '../../../shapes/MongooseError';
import { uploadPhoto } from '../../../resources/animalsApi';

class input extends React.Component {
  fileInput = {};

  setFileInputReference = (reference) => {
    this.fileInput = reference;
  };

  render() {
    const { label, onChange, fieldName, error } = this.props;
    return (
      <label htmlFor={`form-element-${fieldName}`}>
        <div>
          {label}
          {error ? <span> {error.message} </span> : ''}
        </div>
        <input
          type="file"
          id={`form-element-${fieldName}`}
          onChange={(event) => {
            uploadPhoto(event.target.files[0]);
            console.log(event.target.files[0]);
            console.log(this.fileInput.files[0]);
            onChange(event.target.files[0], fieldName);
          }}
          ref={this.setFileInputReference}
        />
        {/* tu pojdzie value */}
      </label>
    );
  }
}

input.propTypes = {
  label: string.isRequired,
  onChange: func.isRequired,
  fieldName: string.isRequired,
  // value: oneOfType([string, number]),
  // type: string,
  error: mongooseErrorShape
};

input.defaultProps = {
  // type: 'text',
  // value: '',
  error: {}
};

export default input;
