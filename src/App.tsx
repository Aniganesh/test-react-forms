import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import _ from 'lodash'
import { attachField, FormConfig, IFormActionProps, TFile, ReactForm } from 'react-forms'
// import { MUIRating } from './MUIRating'
import { IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import 'rf-dropzone-file-picker'
import 'rf-ratings'

const handleChange = (files: TFile[], remFiles?: TFile[]) => {
  console.log("Fn passed to onDone", files.concat(remFiles ? remFiles : []))
}
const onDrop = (files: any) => {
  console.log(files)
}

// attachField("rating", <MUIRating />)
const CONFIG: Array<Array<FormConfig> | FormConfig> = [
  {
    type: 'text',
    valueKey: 'Email',
  },
  {
    type: 'dropFile',
    valueKey: 'files',
    fieldProps: {
      multiple: true,
      onDropFile: onDrop,
    }
  }, {
    type: 'file',
    valueKey: 'files2',
    fieldProps: {
      multiple: true,
      onDone: handleChange,
      wrapWith: (input: JSX.Element) => <IconButton><Add />{input}</IconButton>,
    }
  },
  {
    type: 'rating',
    valueKey: 'rating',
    fieldProps: {
    }
  }
]
const handleSubmit = (formData: any) => {
  console.log(formData)
}
function App() {

  const actionConfig: IFormActionProps = {
    submitButtonText: 'Submit',
    submitButtonProps: {
      size: 'large'
    },
  };
  return (
    <div className="App">
      <ReactForm formId="login-form"
        config={CONFIG}
        formSettings={{
          verticalSpacing: 20
        }}
        onSubmit={handleSubmit}
        actionConfig={actionConfig}
      >
      </ReactForm>
      {/* <MUIDropFile fieldProps={{multiple:true, onDropFile:onDrop}} />
      <MUIFileInput fieldProps={{ invisible: true, multiple: true, onDone: handleChange, WrapWith: (input: JSX.Element) => <IconButton><Add />{input}</IconButton>, }} /> */}
      {/* <MUIRating /> */}
    </div>
  );
}

export default App;
