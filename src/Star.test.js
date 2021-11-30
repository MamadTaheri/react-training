import ReactDOM from 'react-dom';
import Star from "./Star";
import {} from '@testing-library/jest-dom';

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