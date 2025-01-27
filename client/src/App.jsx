import { useState } from 'react'
import TabButton from "./components/TabButton"

function App() {
  const [ selectedTopic, setSelectedTopic] = useState("Please click a button");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
          <TabButton onSelect={() => handleSelect("Todays's Deals")}>Todays's Deals</TabButton>
          <TabButton onSelect={() => handleSelect("Buy Again")}>Buy Again</TabButton>
          <TabButton onSelect={() => handleSelect("Customer Service")}>Customer Service</TabButton>
          <TabButton onSelect={() => handleSelect("Gift Cards")}>Gift Cards</TabButton>
        </menu>
        {selectedTopic}
    </section>
  )
}

export default App
