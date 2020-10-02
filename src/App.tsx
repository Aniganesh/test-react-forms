import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IFormActionProps, ReactForm } from 'react-forms'
import { IconButton } from '@material-ui/core'
import { Add } from '@material-ui/icons'

const CONFIG = [
  { type: 'text', valueKey: 'text' },
  {
    type: 'file', valueKey: 'file', fieldProps: {
      wrapWith: (input: JSX.Element) => <IconButton><Add />{input}</IconButton>,
      multiple: true,
    }
  },
  { type: '', valueKey: '' }
]
const actionConfig: IFormActionProps = {
  submitButtonText: 'Submit',
  submitButtonProps: {
    size: 'large'
  },
}
const handleSubmit = (formData: any) => {
  console.log(formData)
}
function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <ReactForm config={CONFIG} formId="test-form" actionConfig={actionConfig}
          onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
