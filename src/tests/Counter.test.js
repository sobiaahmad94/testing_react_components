
import React from 'react';
import Counter from '../components/Counter';
// importing render - render mounts the component so the DOM nodes can be accessed how it is in the browser
// importing fireEvent - triggers an event on a DOM later
// importing waitFor - enables us to wait for changes to the DOM
// do fireEvent and waitFor work together?
import { render, fireEvent, waitFor } from '@testing-library/react';

describe("Counter", () => {
  let container;

  beforeEach(() => {
    container = render(<Counter />);
  });

  it('should start the counter at zero', () => {
    const counterh1 = container.getByTestId("counter");
    expect(counterh1.textContent).toEqual('0');
  });

  it("should increment counter on click", () => {
    const upButton = container.getByTestId("button-up");
    fireEvent.click(upButton);
    const counterh1 = container.getByTestId("counter"); 
    expect(counterh1.textContent).toEqual('1');
  });

  it("should decrement counter on click", () => {
    const downButton = container.getByTestId("button-down");
    fireEvent.click(downButton);
    const counterh1 = container.getByTestId("counter");
    expect(counterh1.textContent).toEqual('-1')
// if it starts at 0 then it means if someone clicks the down/decrement button it should go to -1
  });
});

