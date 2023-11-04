import { JSXElement } from 'solid-js';
import { TextField } from '@components/form/TextField';
import { createStore } from 'solid-js/store';
import { useForm } from '@hooks/useForm';
import { useAuth } from '@contexts/AuthContext';
export function Login(): JSXElement {
  const { login } = useAuth();
  const { handleSubmit, register } = useForm(login);

  const [fields, setFields] = createStore({
    name: '',
    password: '',
  });

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input {...register('name')} />
        <input {...register('password')} />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}
