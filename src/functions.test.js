import {timesTwo, order} from "./functions";

test("Multiply by two", () => {
    expect(timesTwo(4))
        .toBe(8);
});

const menuItems = [
    {
        id: "1",
        name: "name 1",
        price: 19.5
    },
    {
        id: "2",
        name: "name 2",
        price: 16.5
    },
    {
        id: "3",
        name: "name 3",
        price: 21.5
    },
    {
        id: "4",
        name: "name 4",
        price: 19.5
    },
]

test("Build an order object", () => {
    const result = {
        orderItems: menuItems,
        total: 77
    };
    expect(order(menuItems))
        .toEqual(result)
});

describe('All tests together', function () {
    test("Multiply by two", () => {
        expect(timesTwo(4))
            .toBe(8);
    });
    test("Build an order object", () => {
        const result = {
            orderItems: menuItems,
            total: 77
        };
        expect(order(menuItems))
            .toEqual(result)
    });

});