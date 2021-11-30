import ReactDOM from 'react-dom';
import Star from "./Star";
import {render} from '@testing-library/react';
import {} from "@testing-library/jest-dom"

test("render first star", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Star />, div);
    expect(div.querySelector("svg")).toBeTruthy();
});

test("render second star", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Star />, div);
    expect(div.querySelector("svg")).toHaveAttribute("id", "star");
});

test("renders an h1", () => {
    const { getByText} = render(<Star />);
    const h1 = getByText(/Great Star/);
    expect(h1).toHaveTextContent("Great Star");
});