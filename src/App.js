import { tabs } from "./data";
import Tabs from "./Components/Tabs/Tabs";

function App() {
  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
