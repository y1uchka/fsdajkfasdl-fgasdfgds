import {multiply} from "/multiply.js";

test("multiply", ()=>{
    expect(multiply(2, 2)).toEqual(4);
    expect(multiply(-4, 2)).toEqual(-8);
    expect(multiply(-2, -9)).toEqual(18);
    expect(multiply(0, 5)).toEqual(0);
});