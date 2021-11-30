import { render, fireEvent } from "@testing-library/react";
import CheckBox from "./CheckBox";

test("Selecting the checkbox should toggle its value", () => {
    const {getByLabelText} = render(<CheckBox />);
    const checkbox = getByLabelText(/not checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
})