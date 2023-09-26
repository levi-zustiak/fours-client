import { createStore } from 'solid-js/store';

type Props = {
  onSubmit: () => void;
};

export function useForm(onSubmit: () => void) {
  const [formState, setFormState] = createStore({
    fields: {},
    errors: {},
  });

  const handleChange = ({ currentTarget }: InputEvent) => {
    const { name: key, value } = currentTarget;

    setFormState('fields', key, value);
  };

  const register = (fieldName: string) => ({
    name: fieldName,
    onInput: handleChange,
  });

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    onSubmit(formState.fields);
    // const res = await fetch('localhost:3001/auth/login', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   cache: 'no-cache',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Header': '*',
    //   },
    //   credentials: 'omit',
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer',
    //   body: JSON.stringify(formState.fields),
    // });
    //
    // const user = res.json();
  };

  return {
    register,
    handleSubmit,
  };
}
