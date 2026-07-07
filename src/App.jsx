import "./App.css";
import team from "./data/team";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="app">
      <Section
        title="Team Directory"
        members={team}
      />
    </div>
  );
}

export default App;