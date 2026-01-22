import { render, screen } from "@testing-library/react";
import { FormContext } from "../../context/FormContext";
import Form from "./Form";

test("Form renders with Submit button", () => {
  const mockAddFormData = jest.fn();

  render(
    <FormContext.Provider value={{ addFormData: mockAddFormData }}>
      <Form onClose={jest.fn()} />
    </FormContext.Provider>
  );

  const submitButton = screen.getByText("Submit");
  expect(submitButton).toBeInTheDocument();
});
