import { Form, Input } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const newQuery = evt.currentTarget.elements.input.value
      .toLowerCase()
      .trim();
    onSubmit(newQuery);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="input" />
      <button type="submit">Search</button>
    </Form>
  );
};
