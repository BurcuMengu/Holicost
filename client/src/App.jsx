import { useState } from 'react'
import TabButton from "./components/TabButton"

function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
        <TabButton onSelect={() => handleSelect("Todays's Deals")}>Todays's Deals</TabButton>
        <TabButton onSelect={() => handleSelect("Buy Again")}>Buy Again</TabButton>
        <TabButton onSelect={() => handleSelect("Customer Service")}>Customer Service</TabButton>
        <TabButton onSelect={() => handleSelect("Gift Cards")}>Gift Cards</TabButton>
    </section>
  )
}

export default App
