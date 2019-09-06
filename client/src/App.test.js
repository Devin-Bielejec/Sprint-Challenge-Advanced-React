import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayersComponent from "./components/PlayersComponent";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


// Passes something about async...
it('renders without crashing', async () => {
  const DOM = await rtl.render(<App />);

  console.log(DOM);
});


// Let's see if Players Component works
it('Players Component', async () => {
  const DOM = await rtl.render(<PlayersComponent players={[{name: "Devin", country: "USA", id: 1}, {name: "Seth", country: "Idaho", id:2}]} />);

  //two buttons, after clicking, should be our names and countries
  const devinButton = document.querySelector("div#1");
  expect(devinButton).toBeInTheDocument();
});