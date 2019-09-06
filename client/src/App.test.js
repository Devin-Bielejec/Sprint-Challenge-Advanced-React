import React from 'react';
import App from './App';
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { doesNotReject } from 'assert';
import axiosMock from "axios";

afterEach(rtl.cleanup);

// Passes something about async...
test('renders without crashing', async () => {
  const DOM = await rtl.render(<App />);

  console.log(DOM);
});


// Let's see if Players Component works
// test('Players Component', async () => {
//   await rtl.wait( () => {
//     rtl.render(<App />);
//     expect(document.querySelector("div.players")).toBeInTheDocument()
//   });
  
// });

it('Async Call works', async () => {
  const DOM = rtl.render(<App />)

  const button = await rtl.waitForElement(() => document.querySelector("button"));

  expect(button).toBeInTheDocument();
  
})


it('Click button makes name appear', async () => {
  const DOM = rtl.render(<App />)

  const morganButtonName = await rtl.waitForElement(() => document.querySelector("div[id='Alex Morgan'] button[value='Alex Morgan']"));
  const morganButtonCountry = await rtl.waitForElement(() => document.querySelector("div[id='Alex Morgan'] button[value='United States']"));
  const morganName = await rtl.waitForElement(() => document.querySelector("div[id='Alex Morgan'] h1.name"));
  const morganCountry = await rtl.waitForElement(() => document.querySelector("div[id='Alex Morgan'] h1.country"));

  ///They should all be there
  expect(morganButtonName).toBeInTheDocument();
  expect(morganButtonCountry).toBeInTheDocument();
  expect(morganName).toBeInTheDocument();
  expect(morganCountry).toBeInTheDocument();

  //These two should be blank
  expect(morganName).toHaveTextContent("");
  expect(morganCountry).toHaveTextContent("");

  //Click the button
  rtl.fireEvent.click(morganButtonName, {button: 0});
  rtl.fireEvent.click(morganButtonCountry, {button: 0});

  //The two fields above should be populated
  expect(morganName).toHaveTextContent("Alex Morgan");
  expect(morganCountry).toHaveTextContent("United States");
})