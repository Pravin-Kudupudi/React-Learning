import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useEffect, useState } from 'react';

// An interface defined for the type of props to be passed to the TextInput component
interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

// A TextInput component that can be used anywhere for different form inputs based on the provided props
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

//Main Form component demonstrates basic use of "useState" and "useEffect" hooks to store inputs in variables (or maintain their states) and to detect changes
//in the form
function Form() {

  //Here we use javascripts destructuring syntax to assign values to firstName and setFirstName
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string}>({});

  //A method that creates an error object if any and returns it
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName) newErrors.firstName = 'Please enter valid first name';
    if (!lastName) newErrors.lastName = 'Please enter valid last name';
    return newErrors
  }

  const handleSubmit = (e: any) => {
    e.preventDefault(); //The browser's default behaviour is to reload the page whenever a form is submitted. This prevents the default behaviour.
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
              <TextInput //Passing appropriate props to the component for first name and last name
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
      </form>
    </div>
  );
}

export default Form;