import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import _ from 'lodash'
import { FormConfig, IFormActionProps, ReactForm, attachField } from 'react-forms'
import { MUIRating } from 'mui-rating-component'
import { TFile } from 'react-forms/dist/lib/ml-form-builder/lib/MUIFileInput';
import { IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { MUIDropFile } from 'mui-drop-file'

// attachField('dropFile', <MUIDropFile />)
const handleChange = (files: TFile[], remFiles?: TFile[]) => {
  console.log("Fn passed to onDone", files.concat(remFiles ? remFiles : []))
}
const onDrop = (files: any) => {
  console.log(files)
}
const onChange = (files: FileList) => {
  console.log(files)
}
// @ts-ignore
attachField('rating', <MUIRating />)
// attachField('dropFile', <MUIDropFile />)
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
      WrapWith: (input: JSX.Element) => <IconButton><Add />{input}</IconButton>,
    }
  }
]
const handleSubmit = (formData: any) => {
  console.log(formData)
}
function App() {

  const actionConfig: IFormActionProps = {
    submitButtonText: 'Submit',
    // submitButtonLayout: 'fullWidth',
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
