import './App.css';
import Counter from './components/React-Redux/ReduxDemo';
import Form from './components/Basic-Form-with-validation/FormDemo';

export default function App() {
  return (
    <div className="card">
      <Form></Form>
      <Counter></Counter>
    </div>
  );
}