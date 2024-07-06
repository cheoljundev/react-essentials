import {CORE_CONCEPTS, EXAMPLES} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
    const [selectedTopic, setSelectedTopic] = useState()

    function handleSelect(selectedButton){
        // selectedButton -> 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
    }

    console.log("APP COMPONENT EXECUTING")

  return (
    <div>
        <Header/>
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    <CoreConcept {...CORE_CONCEPTS[0]}/>
                    <CoreConcept {...CORE_CONCEPTS[1]}/>
                    <CoreConcept {...CORE_CONCEPTS[2]}/>
                    <CoreConcept {...CORE_CONCEPTS[3]}/>
                </ul>
            </section>
            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                    <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                    <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                </menu>
                {!selectedTopic && <p>Please select a topic.</p>}
                {selectedTopic && (
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>
                )}
            </section>
        </main>
    </div>
  );
}

export default App;
