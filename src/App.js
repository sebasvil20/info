import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MainContent />
    </div>
  );
}

export default App;
