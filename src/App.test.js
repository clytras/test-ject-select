import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock("react-select", () => ({ options, value, onChange }) => {
  function handleChange(event) {
    console.log(`handleChange:called`);

    const option = options.find(option => {
      return option.value == event.currentTarget.value;
    });

    console.log(`handleChange:option found ("${option.value}:${option.label}")`);

    onChange(option);
  }
  return (
    <select
      id="uc"
      data-testid="select"
      value={value}
      onChange={event => handleChange(event)}
    >
      {options?.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

test('renders learn react link', () => {
  const { queryAllByTestId } = render(<App />);

  const selectOptions = queryAllByTestId("select");
  expect(selectOptions).toHaveLength(2);

  fireEvent.change(selectOptions[0], { target: { value: "0" } });
  fireEvent.change(selectOptions[1], { target: { value: "132" } });

});
