type Props = {
  name: string;
  value: string;
  type?: string;
};

export function TextField(props: Props) {
  const handleChange = (e) => console.log(e);

  return <input {...props} onChange={handleChange} />;
}
