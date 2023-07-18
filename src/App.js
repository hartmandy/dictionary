import "./App.css";
import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [searchValue, setSearchValue] = useState("bibliophile");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="container max-w-xl mt-40">
        <div className="rounded-xl border-slate-300 border-2 p-10 shadow-sm bg-slate-100 text-white tracking-wider">
          <Search
            onChange={handleChange}
            searchValue={searchValue}
            // onSubmit={fetchCurrentWeather}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
