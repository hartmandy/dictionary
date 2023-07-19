import "./App.css";
import { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [definition, setDefinition] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const fetchDictionary = async () => {
    if (searchValue !== "") {
      const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;
      try {
        const dataResponse = await axios.get(API_URL);
        console.log(dataResponse);

        setDefinition({
          word: dataResponse.data[0].word,
          phonetics: dataResponse.data[0].phonetics,
          meanings: dataResponse.data[0].meanings,
        });
      } catch (error) {
        console.error(`Error fetching definition: ${error}`);
      }
    }
  };

  return (
    <div className="container mx-auto">
      <div className="container max-w-xl mt-40">
        <div className="rounded-xl border-slate-300 border-2 p-10 shadow-sm bg-slate-100 text-white tracking-wider">
          <Search
            onChange={handleChange}
            searchValue={searchValue}
            onSubmit={fetchDictionary}
          />
        </div>
        <div className="rounded-xl border-slate-300 border-2 p-10 shadow-sm bg-slate-100 text-black tracking-wider">
          <Results definition={definition} />
        </div>
      </div>
    </div>
  );
}

export default App;
