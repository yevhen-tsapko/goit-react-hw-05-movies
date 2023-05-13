import { Form, Input } from './SearchBox.styled';

export const SearchBox = ({ onChange, value }) => {
  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   const newQuery = evt.currentTarget.value.toLowerCase().trim();
  //   onSubmit(newQuery);
  // };
  return (
    <div>
      <Input
        type="text"
        name="input"
        onChange={evt => onChange(evt.target.value)}
        value={value}
      />
      <button type="submit">Search</button>
    </div>
  );
};
