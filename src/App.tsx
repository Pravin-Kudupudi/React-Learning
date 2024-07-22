import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './App.css';
import { useEffect, useState } from 'react';
import { Counter } from './components/ReduxDemo';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

function TextInput({label, value, onChange, error}: InputFieldProps) {
  return (
    <div>
      <label>{label} <span className="required-asterisk">*</span> </label>
      <InputText
        value={value || ''} onChange={onChange} className={error ? 'p-invalid' : ''}
      />
      {error && <small className="p-error">{error}</small>}
    </div>
  )
}

function App() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string}>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName) newErrors.firstName = 'Please enter valid first name';
    if (!lastName) newErrors.lastName = 'Please enter valid last name';
    return newErrors
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0){
      console.log('Form is valid:', { firstName, lastName });
    } else {
      setErrors(validationErrors)
    }
  }

  useEffect(() => {
    setErrors(prevErrors => {
      const { firstName, ...restErrors} = prevErrors
      return restErrors
    });
  }, [firstName]);

  useEffect(() => {
    setErrors(prevErrors => {
      const { lastName, ...restErrors} = prevErrors
      return restErrors
    });
  }, [lastName]);
  
  return (
    <div className="card">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Card title="Form demo">
          <div className="col-12 grid p-fluid">
            <div className="col-6 input-wrapper">
              <TextInput
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={errors.firstName}
              />
            </div>
            <div className="col-6 input-wrapper">
              <TextInput
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={errors.lastName}
              />
            </div>
            <div className="col-12 flex justify-content-end">
              <Button label='Submit' />
            </div>
          </div>
        </Card>
        <Counter>
        </Counter>
      </form>
    </div>
  );
}

export default App;
